import BootSplash from 'react-native-bootsplash';

import {caloriesBurned} from '../assets/calories';

export const getCaloriesBurned = (activity, value) =>
  value * caloriesBurned[activity];

export const hideSplash = async () => {
  await BootSplash.hide({fade: true});
};
