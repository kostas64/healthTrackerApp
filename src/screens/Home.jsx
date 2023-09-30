import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import Box from '../components/Box';
import {images} from '../assets/images';
import Header from '../components/Header';
import {L_SPACE, XL_SPACE, colors} from '../assets/constants';

const Home = () => {
  return (
    <View style={styles.outContainer}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 24}}
        style={[styles.container]}>
        <View style={styles.boxContainer}>
          <Box
            isDark
            title={'Walk'}
            bottomTitle={`7500/15000`}
            bottomSubtitle={'steps'}
            icon={images.shoe}
            tintColor={colors.lightGrey}
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
              bottomTitle={450.72}
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
    </View>
  );
};

const styles = StyleSheet.create({
  outContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
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
