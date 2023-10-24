import React, {useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';

import {images} from '../assets/images';
import {DimUtils} from '../utils/DimensionUtils';
import SuccessAnimation from './SuccessAnimation';
import {WIDTH, colors, isIOS} from '../assets/constants';

const AccountItem = ({title, onChange, keyboardType}) => {
  const animRef = useRef();
  const inputRef = useRef();

  const [value, setValue] = useState(title);
  const [animPlaying, setAnimPlaying] = useState(false);

  const submitEditing = React.useCallback(() => {
    if (value !== title) {
      onChange(value);
      setAnimPlaying(true);
    }
  }, [value, title]);

  return (
    <View style={styles.itemContainer}>
      <TextInput
        ref={inputRef}
        value={value}
        keyboardType={keyboardType}
        style={styles.itemTitle}
        onChangeText={val => setValue(val)}
        returnKeyType="done"
        onBlur={submitEditing}
        onSubmitEditing={submitEditing}
      />

      {animPlaying ? (
        <SuccessAnimation
          ref={animRef}
          onFinish={() =>
            setTimeout(() => {
              setAnimPlaying(false);
            }, 250)
          }
        />
      ) : (
        <Pressable
          hitSlop={styles.hitSlop}
          onPress={() => inputRef?.current?.focus()}>
          <Image source={images.edit} style={styles.edit} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: isIOS ? DimUtils.getDP(16) : DimUtils.getDP(2),
    paddingHorizontal: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(8),
    backgroundColor: colors.lightestPurple,
  },
  itemTitle: {
    width: WIDTH - DimUtils.getDP(96),
    fontSize: DimUtils.getFontSize(16),
    color: colors.purple,
    fontFamily: 'Rubik-Regular',
  },
  edit: {
    tintColor: colors.lightPurple,
    width: DimUtils.getDP(16),
    height: DimUtils.getDP(16),
  },
  hitSlop: {
    top: DimUtils.getDP(24),
    left: DimUtils.getDP(24),
    right: DimUtils.getDP(24),
    bottom: DimUtils.getDP(24),
  },
});

export default AccountItem;
