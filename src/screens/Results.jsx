import React, {useRef, useState} from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';

import {images} from '../assets/images';
import Screen from '../components/Screen';
import {DimUtils} from '../utils/DimensionUtils';
import useBackAction from '../hooks/useBackAction';
import DiscardModal from '../components/DiscardModal';
import {CommonActions} from '@react-navigation/native';
import AnimatedModal from '../components/AnimatedModal';

const Results = ({navigation}) => {
  //Disable back button from Android
  useBackAction();

  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);

  const cancelModal = () => {
    modalRef.current?.closeModal();

    setTimeout(() => {
      setModalContent(null);
    }, 400);
  };

  const onPressDone = () => {
    setTimeout(() => {
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
    }, 400);

    cancelModal();
  };

  const onPressDelete = () => {
    setModalContent(
      <DiscardModal cancelModal={cancelModal} onPressDone={onPressDone} />,
    );
    modalRef.current?.animateModal();
  };

  return (
    <>
      <Screen noHeader renderInsetPaddings>
        {/* Title * Icon */}
        <View style={styles.headerContainer}>
          <View style={styles.img} />
          <Text style={styles.title}>Summary</Text>
          <TouchableOpacity onPress={onPressDelete}>
            <Image source={images.bin} style={styles.img} />
          </TouchableOpacity>
        </View>
      </Screen>
      <AnimatedModal ref={modalRef} content={modalContent} />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: DimUtils.getDP(24),
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  img: {
    width: DimUtils.getDP(24),
    height: DimUtils.getDP(24),
  },
});

export default Results;
