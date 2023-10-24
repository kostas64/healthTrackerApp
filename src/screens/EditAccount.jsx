import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import AccountItem from '../components/AccountItem';

const Item = ({title, onChange, keyboardType}) => {
  return (
    <AccountItem
      title={title}
      onChange={onChange}
      keyboardType={keyboardType}
    />
  );
};

const EditAccount = ({route}) => {
  const {user, setUser} = useContext(Context);

  const fromLabel = route?.params?.from;

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
    <Screen
      noHeader
      isScrollable
      hasBackButton
      renderInsetPaddings
      backButtonLabel={fromLabel}
      containerStyle={styles.containerStyle}>
      {/* Title  */}
      <Text style={styles.title}>Account Settings</Text>

      <Text style={styles.activityLabel}>Personal Information</Text>

      <Item
        title={user.name}
        keyboardType={'default'}
        onChange={val => onItemChange('name', val)}
      />
      <View style={styles.space} />
      <Item
        title={user.surname}
        keyboardType={'default'}
        onChange={val => onItemChange('surname', val)}
      />
      <View style={styles.space} />
      <Item
        title={user.email}
        keyboardType={'email-address'}
        onChange={val => onItemChange('email', val)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: DimUtils.getDP(24),
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  activityLabel: {
    marginTop: DimUtils.getDP(24),
    marginBottom: DimUtils.getDP(8),
    marginLeft: DimUtils.getDP(16),
    fontFamily: 'Rubik-Medium',
    fontSize: DimUtils.getDP(18),
  },
  space: {
    marginTop: DimUtils.getDP(16),
  },
});

export default EditAccount;
