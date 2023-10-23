import React, {useContext} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import AccountItem from '../components/AccountItem';
import {L_SPACE, M_SPACE} from '../assets/constants';

const Item = ({title, onChange, keyboardType}) => {
  return (
    <AccountItem
      title={title}
      onChange={onChange}
      keyboardType={keyboardType}
    />
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
  activityLabel: {
    marginTop: DimUtils.getDP(32),
    marginBottom: DimUtils.getDP(8),
    marginLeft: DimUtils.getDP(16),
    fontFamily: 'Rubik-Medium',
    fontSize: DimUtils.getDP(18),
  },
});

export default EditAccount;
