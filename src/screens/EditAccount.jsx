import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {images} from '../assets/images';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import {L_SPACE, M_SPACE, WIDTH, colors, isIOS} from '../assets/constants';

const Item = ({title, onChange, keyboardType}) => {
  const inputRef = useRef();
  const [value, setValue] = useState(title);

  return (
    <View style={styles.itemContainer}>
      <TextInput
        ref={inputRef}
        value={value}
        keyboardType={keyboardType}
        style={styles.itemTitle}
        onChangeText={val => {
          onChange(val);
          setValue(val);
        }}
      />
      <Pressable
        hitSlop={styles.hitSlop}
        onPress={() => inputRef?.current?.focus()}>
        <Image source={images.edit} style={styles.edit} />
      </Pressable>
    </View>
  );
};

const EditAccount = () => {
  const insets = useSafeAreaInsets();
  const {user, setUser} = useContext(Context);

  const paddingTop = insets.top > 0 ? insets.top + M_SPACE : 2 * L_SPACE;
  const paddingBottom =
    insets.bottom > 0 ? insets.bottom + M_SPACE : 2 * L_SPACE;

  const onItemChange = (type, val) => {
    setUser({
      ...user,
      ...(type === 'name'
        ? {name: val}
        : type === 'surname'
        ? {surname: val}
        : {email: val}),
    });
  };

  return (
    <ScrollView
      bounces={false}
      keyboardShouldPersistTaps="handled"
      style={[styles.container, {paddingTop, paddingBottom}]}>
      {/* Title & Subtitle */}
      <View>
        <Text style={styles.title}>Account Settings</Text>
      </View>

      <Text style={styles.activityLabel}>Personal Information</Text>

      <Item
        title={user.name}
        keyboardType={'default'}
        onChange={val => onItemChange('name', val)}
      />
      <View style={{marginTop: DimUtils.getDP(16)}} />
      <Item
        title={user.surname}
        keyboardType={'default'}
        onChange={val => onItemChange('surname', val)}
      />
      <View style={{marginTop: DimUtils.getDP(16)}} />
      <Item
        title={user.email}
        keyboardType={'email-address'}
        onChange={val => onItemChange('email', val)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: DimUtils.getDP(24),
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: isIOS ? DimUtils.getDP(16) : DimUtils.getDP(4),
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
  activityLabel: {
    marginTop: DimUtils.getDP(32),
    marginBottom: DimUtils.getDP(8),
    marginLeft: DimUtils.getDP(16),
    fontFamily: 'Rubik-Medium',
    fontSize: DimUtils.getDP(18),
  },
  hitSlop: {
    top: DimUtils.getDP(24),
    left: DimUtils.getDP(24),
    right: DimUtils.getDP(24),
    bottom: DimUtils.getDP(24),
  },
});

export default EditAccount;
