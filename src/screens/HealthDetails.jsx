import React from 'react';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import CustomBottomSheet from '../components/CustomBottomSheet';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Button from '../components/Button';
import Screen from '../components/Screen';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import {XL_SPACE, colors} from '../assets/constants';
import MyDatePicker from '../components/MyDatePicker';
import {healthDetails} from '../assets/healthDetails';
import MyGenderPicker from '../components/MyGenderPicker';
import MyHeightPicker from '../components/MyHeightPicker';
import MyWeightPicker from '../components/MyWeightPicker';

const Table = ({array, setSnaps, setModalContent, onCloseBottomSheet}) => {
  const {user, setUser} = React.useContext(Context);

  const onPress = item => {
    const onChange = (type, value) => {
      setUser({
        ...user,
        ...(type === 'birth'
          ? {birth: value}
          : type === 'gender'
          ? {gender: value}
          : type === 'height'
          ? {height: value}
          : {weight: value}),
      });
    };

    if (item.type === 'birth') {
      setSnaps([270]);
      setModalContent(
        <MyDatePicker
          date={moment(user?.birth).toDate()}
          onChange={birth => onChange('birth', birth)}
          onPressDone={onCloseBottomSheet}
        />,
      );
    } else if (item.type === 'gender') {
      setSnaps([165]);
      setModalContent(
        <MyGenderPicker
          gender={user.gender}
          contHeight={96}
          onChange={gender => onChange('gender', gender)}
          onPressDone={onCloseBottomSheet}
        />,
      );
    } else if (item.type === 'height') {
      setSnaps([165]);
      setModalContent(
        <MyHeightPicker
          height={user.height}
          contHeight={96}
          onChange={height => onChange('height', height)}
          onPressDone={onCloseBottomSheet}
        />,
      );
    } else {
      setSnaps([165]);
      setModalContent(
        <MyWeightPicker
          weight={user.weight}
          contHeight={96}
          onChange={weight => onChange('weight', weight)}
          onPressDone={onCloseBottomSheet}
        />,
      );
    }
  };

  return (
    <View style={styles.tableContainer}>
      {array.map((item, key) => (
        <View key={key}>
          {key !== 0 && <View style={styles.hr} />}
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={styles.tableItemContainer}>
            <Text key={key} style={styles.tableItemTitle}>
              {item.title}
            </Text>
            <Text style={styles.tableItemLabel}>
              {item.type === 'birth'
                ? moment(user?.[item.type])?.format('DD MMM YYYY')
                : user?.[item.type]}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const HealthDetails = () => {
  const navigation = useNavigation();
  const bottomSheetRef = React.useRef();
  const [snaps, setSnaps] = React.useState([270]);
  const [modalContent, setModalContent] = React.useState(null);

  const subtitle =
    'This information ensures data results are as accurate as possible, without to be shared.';

  const onCloseBottomSheet = React.useCallback(() => {
    setModalContent(null);
    !!bottomSheetRef?.current && bottomSheetRef?.current?.close();
  }, []);

  //No need for useEffect
  if (modalContent) {
    bottomSheetRef.current.expand();
  }

  return (
    <Screen
      noHeader
      hasBackButton
      renderInsetPaddings
      backButtonLabel={'Profile'}
      containerStyle={styles.containerStyle}>
      <View style={styles.innerContainer}>
        <View>
          {/* Title & Subtitle */}
          <View>
            <Text style={styles.title}>Personalise Fitness</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>

          {/* Table */}
          <View style={{marginTop: 2 * XL_SPACE}} />
          <Table
            array={healthDetails}
            setSnaps={setSnaps}
            setModalContent={setModalContent}
            onCloseBottomSheet={onCloseBottomSheet}
          />
        </View>

        <Button label={'Done'} onPress={() => navigation.pop()} />
      </View>
      <CustomBottomSheet
        ref={bottomSheetRef}
        snapPoints={snaps}
        modalContent={modalContent}
        onCloseBottomSheet={onCloseBottomSheet}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: DimUtils.getDP(24),
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  subtitle: {
    marginTop: DimUtils.getDP(16),
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  tableContainer: {
    borderRadius: DimUtils.getDP(8),
    backgroundColor: colors.lightestPurple,
  },
  hr: {
    height: 1,
    marginLeft: DimUtils.getDP(14),
    backgroundColor: colors.lightPurple,
  },
  tableItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(8),
  },
  tableItemTitle: {
    fontSize: DimUtils.getFontSize(16),
    color: colors.purple,
    fontFamily: 'Rubik-Medium',
  },
  tableItemLabel: {
    color: colors.lightPurple,
    fontFamily: 'Rubik-Regular',
  },
});

export default HealthDetails;
