import CryptoJS from "crypto-js";

export const encryptValue = (
  value: string,
  encryptionKey: string,
  encryptionIv: string
) => {
  const key = CryptoJS.enc.Hex.parse(encryptionKey);
  const iv = CryptoJS.enc.Hex.parse(encryptionIv);

  const encrypted = CryptoJS.AES.encrypt(value, key, {
    iv,
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding,
  });

  const ciphertext = CryptoJS.enc.Hex.stringify(encrypted.ciphertext);

  return ciphertext;
};

export const decryptValue = (
  encryptedValue: string,
  decryptionKey: string,
  decryptionIv: string
) => {
  if (!encryptedValue) {
    return;
  }
  const key = CryptoJS.enc.Hex.parse(decryptionKey);
  const iv = CryptoJS.enc.Hex.parse(decryptionIv);

  const decrypted = CryptoJS.AES.decrypt(
    CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Hex.parse(encryptedValue),
    }),
    key,
    { iv: iv, mode: CryptoJS.mode.CTR, padding: CryptoJS.pad.NoPadding }
  );

  const decryptedText = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

  return decryptedText;
};

const SECRET_KEY = import.meta.env.VITE_STORAGE_ENCRYPTION_KEY;

const encrypt = (data: unknown) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

const decrypt = (data: string) => {
  const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Promise type result

export const encryptedStorage = {
  getItem: (key: string) => {
    return new Promise((resolve, reject) => {
      try {
        const data = localStorage.getItem(key);
        if (data) {
          resolve(decrypt(data));
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  setItem: (key: string, value: unknown) => {
    return new Promise((resolve, reject) => {
      try {
        const encryptedData = encrypt(value);
        localStorage.setItem(key, encryptedData);
        resolve(undefined);
      } catch (error) {
        reject(error);
      }
    });
  },
  removeItem: (key: string) => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve(undefined);
      } catch (error) {
        reject(error);
      }
    });
  },
};

// Non-Promise result

export const getEncryptedData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return decrypt(data);
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setEncryptedData = (key: string, value: unknown) => {
  try {
    const encryptedData = encrypt(value);
    localStorage.setItem(key, encryptedData);
    return;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const removeEncryptedData = (key: string) => {
  try {
    localStorage.removeItem(key);
    return;
  } catch (error) {
    console.error(error);
    return;
  }
};
