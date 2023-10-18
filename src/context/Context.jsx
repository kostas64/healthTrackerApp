import React, {useState} from 'react';

export const Context = React.createContext({});

const ContextProvider = ({children}) => {
  const [goalSteps, setGoalSteps] = useState(10000);

  return (
    <Context.Provider
      value={{
        goalSteps,
        setGoalSteps,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
