encrypt= require("./encrypt.js");
decrecpt = require("./decrypt.js");

let password="niau61629";
let plaintext="You will never guess this text!";

console.log("Bitte geben Sie einen Text ein: ");
console.log(plaintext);
console.log("");
console.log("Bitte geben sie ihr Passwort für die Verschlüsselung ein:");
console.log(password);
console.log("");

encrypt = encrypt.Encrypt(password,plaintext);
console.log(encrypt);

decrecpt= decrecpt.Decrypt(password,encrypt);
console.log("");
console.log(decrecpt);
