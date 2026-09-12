const express = require("express");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "Rasm yuklanmadi",
    });
  }

  res.status(200).json({
    message: "Rasm muvaffaqiyatli yuklandi",
    url: `/uploads/${req.file.filename}`,
  });
});

module.exports = router;