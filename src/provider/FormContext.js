import { useState, createContext } from 'react';

export const FormContext = createContext();

export const FormStorage = ({ children }) => {
  const [valueForm, setValueForm] = useState({});

  const handleChange = (event, { error, pattern }) => {
    const { name, value } = event.target;

    const errorMsg = !value.match(pattern) ? error : null;

    const isValid = typeof errorMsg === 'string' ? false : true;

    setValueForm((prev) => ({
      ...prev,
      [name]: { value, isValid, error: errorMsg },
    }));
  };

  return (
    <FormContext.Provider value={{ valueForm, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};
