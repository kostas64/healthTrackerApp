import {Animated, Pressable, StyleSheet} from 'react-native';
import React, {useImperativeHandle, useRef, useState} from 'react';

import {DimUtils} from '../utils/DimensionUtils';

const AnimatedModal = React.forwardRef(({content}, ref) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);

  const animateModal = reverse => {
    setIsAnimating(true);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: reverse ? 0 : 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: reverse ? 0 : -100,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => reverse && setIsAnimating(false));
  };

  const closeModal = () => animateModal(true);

  //Export animation trigger function
  useImperativeHandle(ref, () => ({
    animateModal,
    closeModal,
  }));

  const Wrapper = isAnimating ? Pressable : React.Fragment;

  return (
    isAnimating && (
      <Wrapper style={[styles.container]} onPress={closeModal}>
        <Animated.View
          style={[
            styles.innerAnimated,
            {
              opacity,
              transform: [{translateY}],
            },
          ]}>
          {/* Modal content */}
          {content}
        </Animated.View>
      </Wrapper>
    )
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    zIndex: 10000,
  },
  innerAnimated: {
    bottom: -100,
    marginHorizontal: DimUtils.getDP(24),
    borderRadius: DimUtils.getDP(16),
    paddingTop: DimUtils.getDP(20),
    paddingHorizontal: DimUtils.getDP(20),
    paddingBottom: DimUtils.getDP(16),
    backgroundColor: 'white',
  },
  close: {
    tintColor: 'blacl',
    alignSelf: 'flex-end',
    right: DimUtils.getDP(8),
    width: DimUtils.getDP(12),
    height: DimUtils.getDP(12),
    marginBottom: DimUtils.getDP(4),
  },
});

export default AnimatedModal;
