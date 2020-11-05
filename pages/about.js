import React from 'react';
import Head from 'next/head'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

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
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  avatar: {
    width: '25em',
    height: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxWidth: 300,
      maxHeight: 300,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction="column">
      <Head>
        {/* This title is displayed in the tab (next to favicon) */}
        <title key="title">About Us - History & Team | Arc Development</title>
      </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '1em' : '2em' }}
      >
        <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: '2em' }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an indivisual
          to their interestsm techonology is meant to brign us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify="space-around"
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          {/* Column */}
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? 'center' : undefined}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                Founded in 2019, we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                It all started with one question: Why are'nt all business using
                available technology? There are many different answers to that
                question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                We aim to be a powerfu; force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compouinded by the proliferation of smart phones, has opened up
                infinite worlds of possiblity. Things that have always been done
                by hand can now be done digitally and autonatically, and
                completely new methods of interacitions are created daily.
                Taking ful advantage of these advancements is the name of the
                game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                All this change can be a lot to keep uo with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src="/assets/history.svg"
              alt="quill pen sitting on top of book"
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* About Founder */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        {/* colum 1 */}
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>

        {/* colum 2 */}
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Joe Doe, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I have started coding at the age of 9.
          </Typography>
        </Grid>

        {/* colum 3 */}
        <Grid item>
          <Avatar alt="founder" src="/assets/founder.jpg" className={classes.avatar} />
        </Grid>

        {/* This text will show here in small screen (hidden in larger or up) */}
        <Hidden lgUp>
          <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
            <Typography variant="body1" algin="center" paragraph>
              I taught myself basic coding from a library bok in third grade,
              and ever since then my passion has solely been set on learning -
              learning about computers, learning mathmatics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variand="body1" align="center" paragraph>
              Now I'm ready to appy everything I've learnedm and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
        </Hidden>

        {/* colum 4 - row 1 */}
        <Grid item container justify={matchesMD ? 'center' : undefined}>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
          >
            {/* nested colum 1 */}
            <Grid item>
              <img
                src="/assets/yearbook.svg"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
                alt="yearbook page about founder"
              />
            </Grid>
            {/* nested colum 2 */}
            <Grid item>
              <Typography variant="caption">
                a page from my Sophmore yearbook
              </Typography>
            </Grid>
          </Grid>

          {/* row 2 */}
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant="body1" algin="center" paragraph>
                I taught myself basic coding from a library bok in third grade,
                and ever since then my passion has solely been set on learning -
                learning about computers, learning mathmatics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variand="body1" align="center" paragraph>
                Now I'm ready to appy everything I've learnedm and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>

          {/* row 3 */}
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? 'center' : 'flex-end'}
            lg
          >
            <Grid item>
              <img
                src="/asssets/puppy.svg"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
                alt="grey spotted puppy"
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Stering
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
