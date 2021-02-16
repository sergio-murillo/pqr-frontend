import * as CryptoJS from 'crypto-js';

// Función encarga de encriptar
export const encrypt = (plainText: string, encPassword: string): string => {
  try {
    const key = CryptoJS.enc.Utf8.parse(encPassword);
    return CryptoJS.AES.encrypt(plainText, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
  } catch (e) {
    return plainText;
  }
};

// Función encarga de desencriptar
export const decrypt = (encryptText: string, decPassword: string): string => {
  try {
    const key = CryptoJS.enc.Utf8.parse(decPassword);
    return CryptoJS.AES.decrypt(encryptText, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return encryptText;
  }
};
