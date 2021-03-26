import { useContext } from 'react';

import { makeStyles, Paper, Grid, Typography, Button } from '@material-ui/core';

import Input from '../Input';

import { FormContext } from '../../provider/FormContext';
import { MaskCard, MaskCpf, MaskCvv, MaskDate } from '../Input/utils/masks';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
  },
}));

const Form = () => {
  const classes = useStyles();
  const { valueForm, handleChange } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log(valueForm);

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
            <Input onChange={handleChange} label="Name" name="name" />
          </Grid>
          <Grid item xs={6}>
            <Input
              onChange={handleChange}
              label="CPF"
              name="cpf"
              pattern={/^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$/}
              error="Insert a valid CPF"
              mask={MaskCpf}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              onChange={handleChange}
              label="Credit card number"
              name="card"
              pattern={/^((\d{4} ){3})(\d{4})*$/}
              error="Insert a valid credit card number"
              mask={MaskCard}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              onChange={handleChange}
              label="CVV"
              name="cvv"
              pattern={/^((\d{3}))*$/}
              error="Insert a valid CVV"
              mask={MaskCvv}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              onChange={handleChange}
              label="Expiration date"
              name="expDate"
              pattern={/^(\d{2})\/(\d{4})*$/}
              error="Insert a valid expiration date"
              mask={MaskDate}
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
