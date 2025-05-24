const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const imageUrl = req.query.url;
  if (!imageUrl) return res.status(400).json({ status: false, message: 'Parameter url tidak ditemukan' });

  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    const result = await removebg(imageBuffer);

    const base64Data = result.image.replace(/^data:image\/png;base64,/, '');
    const imgBuffer = Buffer.from(base64Data, 'base64');

    res.set('Content-Type', 'image/png');
    res.send(imgBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: 'Gagal memproses gambar' });
  }
});

async function removebg(buffer) {
  if (!buffer) throw new Error("Buffer tidak ditemukan");
  const image = buffer.toString("base64");

  const response = await axios.post("https://us-central1-ai-apps-prod.cloudfunctions.net/restorePhoto", {
    image: `data:image/png;base64,${image}`,
    model: "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003"
  });

  const data = response.data?.replace(/"/g, "");
  if (!data) throw new Error("Gagal menghapus latar belakang gambar");

  return { status: true, image: data };
}

module.exports = router;