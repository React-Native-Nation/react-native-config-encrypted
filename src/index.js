import Config from 'react-native-config';
import Crypto from 'react-native-crypto-js';

class SecureConfig {
  static key;

  static configure ({ key }) {
    SecureConfig.key = key;
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
    return decrypt ? SecureConfig.decrypt(Config[key]) : Config[key];
  }
} 

export default SecureConfig;