const crypto = require('crypto');

let password="niau61629";
let plaintext="You will never guess this text!";

function decryptText(plaintext, password){
    const decipher = crypto.createDecipher('aes192', password);
    let decrypted;
    try {
        decrypted = decipher.update(plaintext, 'hex', 'utf8');
    } catch (err) {
        console.error('HASH-Code invalid!');
    }
    try {
        decrypted += decipher.final();
    } catch (err) {
        console.error('Authentication failed!');
    }
    return decrypted;
}

module.exports = decryptText;