import Config from 'react-native-config';
import { Platform } from 'react-native';

export const BASE_URL = Config.BASE_URL;
export const CODE_PUSH_KEY = Platform.OS === 'ios' ? Config.CODE_PUSH_IOS_KEY : Config.CODE_PUSH_ANDROID_KEY;
