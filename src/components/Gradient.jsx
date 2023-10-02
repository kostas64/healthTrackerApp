import {Defs, LinearGradient, Stop} from 'react-native-svg';

export const Gradient = () => (
  <Defs>
    <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'rgb(236,145,148)'} stopOpacity={0.5} />
      <Stop offset={'100%'} stopColor={'rgb(236,195,108)'} stopOpacity={0} />
    </LinearGradient>
  </Defs>
);
