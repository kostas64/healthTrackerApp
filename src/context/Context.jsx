import React, {useState} from 'react';

export const Context = React.createContext({});

const ContextProvider = ({children}) => {
  const [goalSteps, setGoalSteps] = useState(10000);
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
        goalSteps,
        setGoalSteps,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
