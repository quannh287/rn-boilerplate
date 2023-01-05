import AsyncStorage from '@react-native-async-storage/async-storage';

type STORAGE_NAME = {};
type storageKeys = keyof STORAGE_NAME;

interface IStorage {
  key: storageKeys;
  value: any;
}

const Storage = {
  storeData: async (params: IStorage) => {
    try {
      const jsonValue = JSON.stringify(params.value);
      await AsyncStorage.setItem(params.key, jsonValue);
    } catch (e) {
      throw e;
    }
  },
  readData: async (params: Pick<IStorage, 'key'>) => {
    try {
      const value = await AsyncStorage.getItem(params.key);
      if (value !== null) {
        return JSON.parse(value);
      }
      return null;
    } catch (e) {
      throw e;
    }
  },
  removeData: async (params: Pick<IStorage, 'key'>) => {
    try {
      await AsyncStorage.removeItem(params.key);
    } catch (e) {
      throw e;
    }
  },
  clearStorage: async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      throw e;
    }
  },
};

export { type storageKeys };
export default Storage;
