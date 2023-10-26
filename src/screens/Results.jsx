import React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';

import {images} from '../assets/images';
import Screen from '../components/Screen';
import {DimUtils} from '../utils/DimensionUtils';
import useBackAction from '../hooks/useBackAction';
import {CommonActions} from '@react-navigation/native';

const Results = ({navigation}) => {
  //Disable back button from Android
  useBackAction();

  const onPressDelete = () =>
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

  return (
    <Screen noHeader renderInsetPaddings>
      {/* Title * Icon */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Summary</Text>
        <View style={styles.imgContainer}>
          <TouchableOpacity onPress={onPressDelete}>
            <Image source={images.bin} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  imgContainer: {
    position: 'absolute',
    right: DimUtils.getDP(24),
  },
  img: {
    width: DimUtils.getDP(24),
    height: DimUtils.getDP(24),
  },
});

export default Results;
