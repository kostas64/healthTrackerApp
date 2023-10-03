import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {images} from '../assets/images';
import {L_SPACE, M_SPACE, colors, isIOS} from '../assets/constants';

const Header = ({title, subtitle}) => {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top > 0 ? insets.top + M_SPACE : 2 * L_SPACE;

  return (
    <View style={[styles.rowBetween, {paddingTop, paddingBottom: M_SPACE}]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <Image source={images.me} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  title: {
    color: 'black',
    fontFamily: 'Rubik-SemiBold',
    fontSize: 26,
  },
  subtitle: {
    color: colors.lightGrey,
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    marginTop: isIOS ? 4 : 0,
  },
  profile: {
    height: 52,
    width: 52,
    borderRadius: 26,
  },
});

export default Header;
