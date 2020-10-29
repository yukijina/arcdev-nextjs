import React from 'react';
import Lottie from 'react-lottie';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import integrationAnimation from '../src/animations/integrationAnimation/data.json';
import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
      paddingTop: '1em',
    },
  },
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false, //stop animation autoplay for testing - turn true if you want to see animation
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify={matchesMD ? 'center' : undefined}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginleft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href="/customsoftware"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img
                src="/assets/backArrow.svg"
                alt="Back to Custom Software Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Mobile apps allow you to tale your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-ppatform native solutions for any
              part of your business process, This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Conenient. Connection
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              tyle={{ backgroundColor: 'transparent' }}
              component={Link}
              href="/websites"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to iO/Android App Development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginTop: '15rem', marginBottom: '15em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variation="body1"
              paragraph
            >
              Our technology enables an innate interconnection betweenweb and
              mobile applications, utting everything you read right in one
              convenient place.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variation="body1"
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>

        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variation="body1"
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets = al at the same time.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variation="body1"
              align={matchesSM ? 'center' : 'right'}
              paragraph
            >
              This significantly reduces consts and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        style={{ marginBottom: '15em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/swissKnife.svg" alt="swiss army knife" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/extendAccess.svg"
              alt="tear-one-off sign"
              style={{ maxWidth: matchesXS ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>

        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/increaseEngagement.svg" alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
