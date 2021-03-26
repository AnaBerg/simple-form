import { TextField } from '@material-ui/core';

const Input = ({ mask, label, onChange, name, error, pattern }) => {
  return (
    <TextField
      fullWidth
      required
      label={label}
      variant="outlined"
      name={name}
      InputProps={{
        inputComponent: mask,
      }}
      onChange={(e) => onChange(e, { error, pattern })}
    />
  );
};

export default Input;
