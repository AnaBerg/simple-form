import MaskedInput from 'react-text-mask';

import {
  makeStyles,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
  },
}));

const MaskCpfInput = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
    />
  );
};

const MaskCardInput = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
    />
  );
};

const MaskCvvInput = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/]}
    />
  );
};

const MaskDateInput = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
    />
  );
};

const handleSubmit = (event) => {
  event.preventDefault();
};

const Form = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              type="title"
              color="secondary"
              variant="h4"
              align="center"
            >
              Inform our credit card information
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="caption" color="primary">
              * Required information
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="CPF"
              variant="outlined"
              InputProps={{
                inputComponent: MaskCpfInput,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Credit Card Number"
              variant="outlined"
              InputProps={{
                inputComponent: MaskCardInput,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="CVV"
              variant="outlined"
              InputProps={{
                inputComponent: MaskCvvInput,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Expiration date"
              variant="outlined"
              InputProps={{
                inputComponent: MaskDateInput,
              }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="reset">
              <Typography>Clear</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              <Typography>Submit</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
