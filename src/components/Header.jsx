import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {images} from '../assets/images';
import {L_SPACE, M_SPACE, colors} from '../assets/constants';

const Header = () => {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top > 0 ? insets.top + M_SPACE : 2 * L_SPACE;

  return (
    <View style={[styles.rowBetween, {paddingTop, paddingBottom: M_SPACE}]}>
      <View>
        <Text style={styles.title}>For today</Text>
        <Text style={styles.subtitle}>Good morning, John!</Text>
      </View>
      <Image source={images.me} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 26,
    letterSpacing: 0.3,
  },
  subtitle: {
    color: colors.lightGrey,
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 0.3,
    marginTop: 4,
  },
  profile: {
    height: 52,
    width: 52,
    borderRadius: 26,
  },
});

export default Header;
