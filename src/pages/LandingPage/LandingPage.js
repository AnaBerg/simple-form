import { Grid, makeStyles } from '@material-ui/core';

import Header from '../../components/Header';
import Form from '../../components/Form';
import Info from '../../components/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 68px)',
    width: '100vw',
    padding: 30,
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  
  return (
    <>
      <Header />
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <Info />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
