import {caloriesBurned} from '../assets/calories';

export const getCaloriesBurned = (activity, value) =>
  value * caloriesBurned[activity];
