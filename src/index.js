import Crypto from 'crypto-js';

class SecureConfig {
  static key;

  static configure ({ key, provider }) {
    SecureConfig.key = key;
    SecureConfig.configProvider = provider;
  }

  static encrypt (msg = '') {
    if(!SecureConfig.key){
      throw new Error(`Trying to encrypt without a configuration ~ ${msg}`);
    }
    return Crypto.AES.encrypt(String(msg), SecureConfig.key).toString();
  }

  static decrypt (value) {
    if (!value) {
      return;
    }
    let decryptedString ;
    try {
      decryptedString = Crypto.AES.decrypt(String(value), SecureConfig.key).toString(Crypto.enc.Utf8);
    } catch (error) {
      return decryptedString;
    }
    return decryptedString;
  }

  static get (key, decrypt = true) {
    return decrypt ? SecureConfig.decrypt(SecureConfig.configProvider[key]) : SecureConfig.configProvider[key];
  }
} 

export default SecureConfig;
