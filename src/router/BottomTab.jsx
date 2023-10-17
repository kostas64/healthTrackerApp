import {useEffect, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Me from '../screens/Me';
import Home from '../screens/Home';
import Stats from '../screens/Stats';
import Train from '../screens/Train';
import {images} from '../assets/images';
import SetGoal from '../screens/SetGoal';
import {DimUtils} from '../utils/DimensionUtils';
import Achievements from '../screens/Achievements';
import TrainButton from '../components/TrainButton';
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

        useEffect(() => {
          Animated.timing(scale, {
            toValue: isFocused ? 1.2 : 1,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }, [isFocused]);

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
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Me" component={Me} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={BottomStack} />
      <Stack.Screen name="SetGoal" component={SetGoal} />
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
    width: DimUtils.getDP(24),
    height: DimUtils.getDP(24),
    tintColor: colors.purple,
  },
});

export default BottomStack;
