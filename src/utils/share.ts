import {Share} from 'react-native';

export const onShare = async (message: string) => {
  if (!message) {
    throw new Error('message is undefined');
  }
  try {
    const result = await Share.share({
      message: message,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('shareing');
      } else {
        console.log('shred');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('action dismissed');
    }
  } catch (error) {
    console.log('error -> ', error);
  }
};
