function Encrypt(password,plaintext){
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192',password);

    this.password = password;
    this.plaintext = plaintext;
    this.encrypted= cipher.update(this.plaintext, 'utf-8','hex');
    this.encrypted+=cipher.final('hex');
    return this.encrypted;
}

module.exports.Encrypt =Encrypt;






