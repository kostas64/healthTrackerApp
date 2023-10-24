import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Header from './Header';
import BackButton from './BackButton';
import {L_SPACE, M_SPACE} from '../assets/constants';

const BottomTabScreen = ({
  noHeader,
  hasBackButton,
  containerStyle,
  backButtonLabel,
  isScrollable,
  rotateBack,
  renderInsetPaddings,
  title,
  subtitle,
  scrollY,
  children,
}) => {
  const insets = useSafeAreaInsets();

  const Wrapper = isScrollable ? ScrollView : View;

  const paddingTop = insets.top > 0 ? insets.top + M_SPACE : 2 * L_SPACE;
  const paddingBottom =
    insets.bottom > 0 ? insets.bottom + M_SPACE : 2 * L_SPACE;

  return (
    <Wrapper
      bounces={false}
      style={[
        styles.container,
        renderInsetPaddings && {paddingTop, paddingBottom},
        containerStyle,
      ]}
      keyboardShouldPersistTaps="handled">
      {!noHeader && (
        <Header title={title} subtitle={subtitle} scrollY={scrollY} />
      )}
      {hasBackButton && (
        <BackButton label={backButtonLabel} rotate={rotateBack} />
      )}
      {children}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default BottomTabScreen;
