import React, {useState} from 'react';

export const Context = React.createContext({});

const ContextProvider = ({children}) => {
  const [bpmState, setBpmState] = useState([]);
  const [goalSteps, setGoalSteps] = useState(10000);

  const [notifications, setNotifications] = useState([
    {
      title: 'Daily Coaching',
      caption: 'Get notifications that help you complete your Activity goals.',
      enabled: true,
    },
    {
      title: 'Goal Completions',
      caption:
        'Receive a notification when you close your Move ring or earn an award.',
      enabled: true,
    },
    {
      title: 'Activity Sharing',
      caption:
        'Receive a notification when someone who shares Activity with you completes a workout or earns an award.',
      enabled: true,
    },
  ]);

  const [user, setUser] = useState({
    name: 'Konstantinos',
    surname: 'Efkarpidis',
    email: 'kostas11062@gmail.com',
    birth: '1997-08-06',
    gender: 'Male',
    height: '181 cm',
    weight: '75 kg',
  });

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        bpmState,
        setBpmState,
        goalSteps,
        setGoalSteps,
        notifications,
        setNotifications,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
