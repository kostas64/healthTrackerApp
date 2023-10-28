import {
  Text,
  View,
  Image,
  Share,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {images} from '../assets/images';
import Button from '../components/Button';
import Screen from '../components/Screen';
import {colors} from '../assets/constants';
import {resetToHome} from '../utils/NavUtils';
import {DimUtils} from '../utils/DimensionUtils';
import ResultsBox from '../components/ResultsBox';
import useBackAction from '../hooks/useBackAction';
import DiscardModal from '../components/DiscardModal';
import AnimatedModal from '../components/AnimatedModal';
import {getCaloriesBurned} from '../utils/GenericUtils';

const Results = ({navigation, route}) => {
  //Disable back button from Android
  useBackAction();

  const {activity, avgSpeed, distance, time} = route?.params || {};
  const timeFormated = time?.toString()?.replace('PT', '')?.toLowerCase();
  const distanceFormated = `${Number(distance).toFixed(2)} km`;
  const avgSpeedFormated = `${avgSpeed?.replace(',', '.')} km/h`;
  const caloriesFormated = `${getCaloriesBurned(activity, distance).toFixed(
    2,
  )} kcal`;

  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);

  const cancelModal = () => {
    modalRef.current?.closeModal();

    setTimeout(() => {
      setModalContent(null);
    }, 400);
  };

  const onPressDone = () => {
    resetToHome(navigation);
    cancelModal();
  };

  const onPressDelete = () => {
    setModalContent(
      <DiscardModal cancelModal={cancelModal} onPressDone={onPressDone} />,
    );
    modalRef.current?.animateModal();
  };

  const shareResults = async () => {
    try {
      await Share.share({
        message: `Hi, check what i achieved during my ${activity?.toLowerCase()} activity 😁\n\nCalories: ${caloriesFormated}\nDuration: ${timeFormated}`,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      <Screen noHeader renderInsetPaddings containerStyle={styles.container}>
        {/* Title & Icons*/}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={shareResults}>
            <Image source={images.share} style={styles.img} />
          </TouchableOpacity>

          <Text style={styles.title}>Summary</Text>
          <TouchableOpacity onPress={onPressDelete}>
            <Image source={images.bin} style={styles.img} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>{activity}</Text>

        {/* Boxes */}
        <View style={styles.boxesContainer}>
          <View style={styles.rowCenter}>
            <ResultsBox
              img={images.clock}
              label={'Time'}
              value={timeFormated}
            />
            <ResultsBox
              img={images.distance}
              label={'Distance'}
              value={distanceFormated}
            />
          </View>
          <View style={styles.space} />
          <View style={styles.rowCenter}>
            <ResultsBox
              img={images.speedometer}
              label={'Avg Speed'}
              value={avgSpeedFormated}
            />
            <ResultsBox
              img={images.flame}
              label={'Calories'}
              tintColor={colors.orange}
              value={caloriesFormated}
            />
          </View>
        </View>

        <Button label={'Save'} onPress={() => resetToHome(navigation)} />
      </Screen>
      <AnimatedModal ref={modalRef} content={modalContent} />
    </>
  );
};

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: DimUtils.getDP(24),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxesContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: DimUtils.getDP(64),
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  subtitle: {
    paddingTop: DimUtils.getDP(8),
    alignSelf: 'center',
    fontFamily: 'Rubik-Regular',
    fontSize: DimUtils.getFontSize(16),
  },
  img: {
    width: DimUtils.getDP(24),
    height: DimUtils.getDP(24),
  },
  space: {
    height: DimUtils.getDP(16),
  },
});

export default Results;
