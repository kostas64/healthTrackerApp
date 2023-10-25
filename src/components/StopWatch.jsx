import moment from 'moment';
import React, {useImperativeHandle} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const Timer = ({interval, style}) => {
  const pad = n => (n < 10 ? '0' + n : n);
  const duration = convertTime(interval);
  const hours = pad(duration.hours());

  return (
    <View style={styles.timerContainer}>
      {hours > 0 && <Text style={style}>{`${pad(duration.hours())}:`}</Text>}
      <Text style={style}>{`${pad(duration.minutes())}:`}</Text>
      <Text style={style}>{pad(duration.seconds())}</Text>
    </View>
  );
};

const convertTime = time => {
  return moment.duration(time);
};

let timer;

const StopWatch = React.forwardRef((props, ref) => {
  const [laps, setLaps] = React.useState([]);
  const [startState, setStartState] = React.useState(0);
  const [now, setNowState] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [pausedTime, setPausedTime] = React.useState(0);

  useImperativeHandle(ref, () => ({
    start,
    stop,
    reset,
    pause,
    resume,
    isRunning,
    extractTime,
  }));

  const start = () => {
    const now = new Date().getTime();
    setIsRunning(true);
    setStartState(now);
    setNowState(now);
    setLaps([0]);

    timer = setInterval(() => {
      setNowState(new Date().getTime());
    }, 100);
  };

  const stop = () => {
    const [firstLap, ...other] = laps;

    clearInterval(timer);
    setStartState(0);
    setNowState(0);
    setLaps([firstLap + now - startState, ...other]);
    setIsRunning(false);
  };

  const reset = () => {
    setStartState(0);
    setNowState(0);
    setLaps([]);
  };

  const pause = () => {
    if (isRunning) {
      clearInterval(timer);
      setPausedTime(now - startState);
      setIsRunning(false);
    }
  };

  const resume = () => {
    if (!isRunning) {
      const now = new Date().getTime();
      setIsRunning(true);
      setStartState(now);
      setNowState(now);

      // Adjust the start time to account for the paused time
      setStartState(startState + now - (startState + pausedTime));

      timer = setInterval(() => {
        setNowState(new Date().getTime());
      }, 100);
    }
  };

  const extractTime = () =>
    convertTime(laps.reduce((total, curr) => total + curr, 0) + timerVar);

  React.useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  const timerVar = now - startState;
  return (
    <View style={styles.container}>
      <Timer
        interval={laps.reduce((total, curr) => total + curr, 0) + timerVar}
        style={styles.timer}
      />
    </View>
  );
});

export default StopWatch;

const styles = StyleSheet.create({
  container: {
    paddingVertical: DimUtils.getDP(8),
    paddingHorizontal: DimUtils.getDP(12),
    borderRadius: DimUtils.getDP(8),
  },
  timer: {
    color: colors.purple,
    fontSize: DimUtils.getFontSize(54),
    fontFamily: 'Rubik-Medium',
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
