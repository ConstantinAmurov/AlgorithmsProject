var express = require("express");

var router = express.Router();
var VigenereCipher = require("../algorithms/VigenereCipher");

//VARIABLES FOR VIGENERE CIPHER
var cipher_plain_text;
var cipher_text;
var cipher_key;
var decrypt_plain_text;
var decrypt_text;
var decrypt_key;

/* GET vigenere algorithm route */
router.get("/", function (req, res, next) {
  res.render("../views/vigenere", {
    title: "Vigenere Algorithm",
    cipherPlainText: cipher_plain_text,
    cipherKey: cipher_key,
    encryptedCipherText: cipher_text,
    decriptCipherPlainText: decrypt_plain_text,
    decriptCipherKey: decrypt_key,
    decriptCipherText: decrypt_text,
  });
});
router.post("/encrypt", function (req, res, next) {
  console.log("ENCRYPT BUTTON PRESSED");
  cipher_plain_text = req.body.plainText;
  cipher_key = req.body.keyText;
  cipher_text = VigenereCipher.encrypt(cipher_plain_text, cipher_key);

  console.log(cipher_text);
  console.log(cipher_key);
  res.redirect("/vigenere");
});

router.post("/decrypt", function (req, res, next) {
  console.log("DECRYPT BUTTON PRESSED");
  decrypt_plain_text = req.body.decryptText;
  decrypt_key = req.body.keyText;
  decrypt_text = VigenereCipher.decrypt(decrypt_plain_text, decrypt_key);
  console.log(decrypt_text);
  console.log(decrypt_key);
  res.redirect("/vigenere");
});

module.exports = router;
