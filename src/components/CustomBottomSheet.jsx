import React from 'react';
import {StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import {DimUtils} from '../utils/DimensionUtils';

const CustomBottomSheet = React.forwardRef(
  ({modalContent, onCloseBottomSheet, snapPoints, backgroundColor}, ref) => {
    return (
      <BottomSheet
        ref={ref}
        index={-1}
        style={styles.container}
        onClose={onCloseBottomSheet}
        backgroundStyle={{backgroundColor: backgroundColor || 'white'}}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            enableTouchThrough={false}
            style={[styles.backgroundColor, StyleSheet.absoluteFillObject]}
          />
        )}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.indicatorStyle}
        enableContentPanningGesture={false} //Fix for Android Scroll inside BottomSheet
        enablePanDownToClose={true}>
        {modalContent}
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderRadius: DimUtils.getDP(24),
    overflow: 'hidden',
  },
  backgroundColor: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  indicatorStyle: {
    height: 0,
  },
});

export default CustomBottomSheet;
