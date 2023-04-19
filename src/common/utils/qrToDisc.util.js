const axios = require("axios");
const formData = require("form-data");
const fs = require("fs");
const qr = require("qrcode");

module.exports.sendQrCode = async (code) => {
  const form = new formData();

  qr.toFile("./qrCode.png", code, async function (err) {
    if (err) {
      throw err;
    }
    form.append(
      "avatar_url",
      "https://rodcordeiro.github.io/shares/img/vader.png"
    );
    form.append("username", "rod");
    form.append("content", "KODA-Class QRCode");
    form.append("file1", fs.createReadStream("./qrCode.png"));

    await axios
      .post(
        "https://discord.com/api/webhooks/1096546893179396096/Dtg3rf_vr-roPMGHKWU2KVZF0WszWx__UKPqbrZWZk7VG1ukU8LREvcRyXgIOK2iw7Kn",
        form
      )
      .then((res) => {
        console.log("QR Code sent. Please verify quickly.");
        fs.unlink("./qrCode.png", () => {});
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  });
};
