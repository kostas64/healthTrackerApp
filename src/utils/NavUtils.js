import {CommonActions} from '@react-navigation/native';

export const resetToHome = navigation => {
  setTimeout(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Main',
            state: {
              routes: [
                {
                  name: 'Home',
                },
              ],
            },
          },
        ],
      }),
    );
  }, 400);
};
