const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const imageUrl = req.query.url;
  if (!imageUrl) return res.status(400).json({ status: false, message: 'url parameter missing' });

  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    const result = await removebg(imageBuffer);

    const base64Data = result.image.replace(/^data:image\/\w+;base64,/, '');
    const imgBuffer = Buffer.from(base64Data, 'base64');

    res.setHeader('Content-Type', 'image/png');
    res.end(imgBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: 'Failed to process image' });
  }
});

async function removebg(buffer) {
  const base64 = buffer.toString('base64');
  const res = await axios.post('https://us-central1-ai-apps-prod.cloudfunctions.net/restorePhoto', {
    image: `data:image/png;base64,${base64}`,
    model: 'fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003'
  });

  return { image: res.data?.replace(/"/g, '') };
}

module.exports = router;