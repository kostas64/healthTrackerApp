import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import Box from '../components/Box';
import {images} from '../assets/images';
import Screen from '../components/Screen';
import {Context} from '../context/Context';
import {dataInfo, getDates} from '../utils/Dates';
import {L_SPACE, XL_SPACE, colors} from '../assets/constants';

const Home = () => {
  const {user, goalSteps} = useContext(Context);

  const steps = getDates()?.[7]?.steps?.replace(',', '');
  const progress = Number(parseInt(steps)) / goalSteps;

  return (
    <Screen title={'For today'} subtitle={`Welcome ${user?.name}!`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 24}}
        style={[styles.container]}>
        <View style={styles.boxContainer}>
          <Box
            isDark
            title={'Walk'}
            progress={progress > 1 ? 1 : progress}
            bottomTitle={`${steps}/${goalSteps}`}
            bottomSubtitle={'steps'}
            icon={images.shoe}
            tintColor={colors.veryLightPurple}
          />
          <Box
            hasStackBar
            icon={images.drop}
            tintColor={colors.cyan}
            title={'Water'}
            bottomTitle={0.55}
            bottomSubtitle={'liters'}
          />
        </View>
        <View style={[styles.boxContainer, styles.marginTopXL]}>
          <View>
            <Box
              icon={images.flame}
              tintColor={colors.orange}
              title={'Calories'}
              bottomTitle={dataInfo?.[7]?.calories}
              bottomSubtitle={'kcal'}
              footerContainer={styles.marginTopXXL}
            />
            <View style={styles.marginTopXL}>
              <Box
                icon={images.sleep}
                tintColor={colors.purple}
                title={'Sleep'}
                bottomTitle={'08:32'}
                bottomSubtitle={'hours'}
                footerContainer={styles.marginTopXXL}
              />
            </View>
          </View>
          <Box
            icon={images.heart}
            tintColor={colors.lightRed}
            hasLinear
            title={'Heart'}
            bottomTitle={'105'}
            bottomSubtitle={'bpm'}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 2 * L_SPACE,
  },
  boxContainer: {
    marginTop: 2 * L_SPACE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginTopXL: {
    marginTop: XL_SPACE,
  },
  marginTopXXL: {
    marginTop: 2 * XL_SPACE,
  },
});

export default Home;
