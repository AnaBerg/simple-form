import { useHistory } from 'react-router-dom';

import {
  makeStyles,
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import useSound from 'use-sound';

import SearchIcon from '@material-ui/icons/Search';
import { ReactComponent as Communism } from '../../assets/icons/hammer.svg';
import anthem from '../../assets/sounds/national_anthem_of_ussr.mp3';

const useStyles = makeStyles((theme) => ({
  communism: {
    height: 38,
    width: 38,
    fill: theme.palette.secondary.main,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [play, { stop, isPlaying }] = useSound(anthem);

  const handleRoute = (route) => {
    history.push(route);
  };

  const handleSound = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center" justify="center" direction="row">
          <Grid item xs={10}>
            <Button onClick={() => handleRoute('')}>
              <Typography type="title" variant="h3" color="secondary">
                Our Credit Card
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={() => handleRoute('search')}>
              <SearchIcon color="secondary" fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={handleSound}>
              <Communism className={classes.communism} />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
