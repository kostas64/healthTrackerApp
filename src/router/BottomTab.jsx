import {useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Stats from '../screens/Stats';
import {images} from '../assets/images';
import Profile from '../screens/Profile';
import SetGoal from '../screens/SetGoal';
import Results from '../screens/Results';
import Activity from '../screens/Activity';
import Train from '../screens/ChooseActivity';
import {DimUtils} from '../utils/DimensionUtils';
import EditAccount from '../screens/EditAccount';
import Achievements from '../screens/Achievements';
import TrainButton from '../components/TrainButton';
import HealthDetails from '../screens/HealthDetails';
import Notifications from '../screens/Notifications';
import {L_SPACE, M_SPACE, colors} from '../assets/constants';

const Tab = createBottomTabNavigator();

const TabBar = ({state, descriptors, navigation}) => {
  const insets = useSafeAreaInsets();
  const paddingBottom = insets.bottom > 0 ? insets.bottom + 8 : 24;

  return (
    <View style={[styles.tabBarContainer, {paddingBottom}]}>
      {state.routes.map((route, index) => {
        const scale = useRef(new Animated.Value(1)).current;
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        //No need for useEffect
        Animated.timing(scale, {
          toValue: isFocused ? 1.2 : 1,
          duration: 250,
          useNativeDriver: true,
        }).start();

        const opacity = isFocused || route.name === 'Train' ? 1 : 0.25;

        return (
          <TouchableOpacity
            key={`tab-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            disabled={isFocused}
            onLongPress={onLongPress}
            style={[styles.tabContainer, {opacity}]}>
            {route.name !== 'Train' ? (
              <Animated.Image
                source={images[route.name]}
                style={[styles.icon, {transform: [{scale}]}]}
              />
            ) : (
              <TrainButton />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomStack = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Achievements" component={Achievements} />
      <Tab.Screen name="Train" component={Train} />
      <Tab.Screen name="Activity" component={Stats} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const slideRight = {
    animation: 'slide_from_right',
  };

  const gestureDisabled = {
    gestureEnabled: false,
  };

  const slideBottom = {
    animation: 'slide_from_bottom',
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        orientation: 'portrait',
      }}>
      <Stack.Screen name="Main" component={BottomStack} />
      <Stack.Screen
        name="Account"
        component={EditAccount}
        options={{
          ...slideRight,
        }}
      />
      <Stack.Screen
        name="SetGoal"
        component={SetGoal}
        options={{
          ...slideRight,
        }}
      />
      <Stack.Screen
        name="HealthDetails"
        component={HealthDetails}
        options={{
          ...slideRight,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          ...slideRight,
        }}
      />
      <Stack.Screen
        name="ChooseActivity"
        component={Train}
        options={{
          ...slideBottom,
          ...gestureDisabled,
        }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{
          ...slideRight,
          ...gestureDisabled,
        }}
      />
      <Stack.Screen
        name="Results"
        component={Results}
        options={{
          ...slideRight,
          ...gestureDisabled,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarContainer: {
    paddingTop: M_SPACE,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 2 * L_SPACE,
  },
  icon: {
    top: DimUtils.getDP(4),
    width: DimUtils.getDP(24),
    height: DimUtils.getDP(24),
    tintColor: colors.purple,
  },
});

export default BottomStack;
