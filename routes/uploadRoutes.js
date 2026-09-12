const express = require("express");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "Rasm yuklanmadi",
    });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

  res.status(200).json({
    message: "Rasm muvaffaqiyatli yuklandi",
    url: imageUrl,
  });
});

module.exports = router;