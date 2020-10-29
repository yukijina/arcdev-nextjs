import React from 'react';
import Link  from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../src/ui/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBotton: '1em',
  },
  //ServiceContainer is for every columns(3). If you want to customeize each container style, use inlineStyle in each container (ex. style={{ marginTop '5em'}}
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

const Services = (props) => {
  // material-ui
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? 'center' : undefined}
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            marginTop: matchesSM ? '1em' : '2em',
          }}
        >
          Services
        </Typography>
      </Grid>
      {/* column - 1 */}
      <Grid item>
        {/* service 1/3 - iOS/Android App*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'} // push container to right
          style={{ marginTop: matchesSM ? '1em' : '5em' }} //overwrite serviceContainer marginTop
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}
              with either mobile platform.
            </Typography>
            <Button
              component={Link}
              href="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span
                component={Link}
                href="/mobileapps"
                style={{ marginRight: 10 }}
              >
                Learn More
              </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* service 2/3 - custom software */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              href="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src="/assets/customSoftware.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>

        <Grid item>
          {/* service 3/3 - Website App*/}
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justify={matchesSM ? 'center' : 'flex-end'}
            style={{ marginBottom: '10em' }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined,
                width: matchesSM ? undefined : '35em',
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimaized for Search Engine. Build for Dpeed.
                {matchesSM ? null : <br />}
                with either mobile platform.
              </Typography>
              <Button
                component={Link}
                href="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
              <img
                alt="website icon"
                src="/assets/websiteIcon.svg"
                className={classes.icon}
                width="250em"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
