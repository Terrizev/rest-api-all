const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const imageUrl = req.query.url;

  if (!imageUrl) return res.status(400).json({ status: false, message: 'URL gambar tidak ditemukan.' });

  try {
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    const result = await removebg(imageBuffer);

    if (!result.status) {
      return res.status(500).json({ status: false, message: 'Gagal memproses gambar.' });
    }

    const base64Data = result.image.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    res.set('Content-Type', 'image/png');
    res.send(buffer);

  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: 'Terjadi kesalahan saat memproses permintaan.' });
  }
});

async function removebg(buffer) {
  try {
    if (!buffer) return { status: false, message: "Buffer tidak ditemukan" };
    return await new Promise((resolve, reject) => {
      const image = buffer.toString("base64");
      axios.post("https://us-central1-ai-apps-prod.cloudfunctions.net/restorePhoto", {
        image: `data:image/png;base64,${image}`,
        model: "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003"
      }).then(res => {
        const data = res.data?.replace(`"`, "");
        if (!data) return reject("Gagal menghapus latar belakang gambar.");
        resolve({ status: true, image: data });
      }).catch(reject);
    });
  } catch (e) {
    return { status: false, message: e };
  }
}

module.exports = router;