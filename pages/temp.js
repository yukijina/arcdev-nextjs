<Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FF7373', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? 'center' : undefined}
              gutterButtom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Then it's time for us to start on your minimum viable product.
              That's just a fancy term for a mockup, which doesn't include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              This helps us understand and refine the solution itself before
              gettingg distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/mockupIcon.svg"
            alt="basic website desgin outline"
            width="100%"
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? 'center' : 'undefined'}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? 'center' : undefined}
              gutterButtom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Before movig any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              We give you an interactive demonstration of the mockups, throughly
              explaining the thought process that went into each screen and
              every anticipated feature.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Once you're completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine-details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img 
            src="/assets/reviewIcon.svg" 
            alt="Magnifying glass" 
            width="100%"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        justify={matchesMD ? 'center' : undefined}
        style={{ backgroundColor: '#A67C52', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? 'center' : undefined}
              gutterButtom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Using the mockups and notes taken during the consultation as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you’re already familiar
              with.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/designIcon.svg"
            alt="paintbrush leaving stroke of paint"
            width="100%"
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        justify={matchesMD ? 'center' : undefined}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              A second round of review is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              This time we’ll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src="/assets/review.svg" alt="magnifying glass" width="100%"  style={{ maxWidth: "40em" }} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FBB03B', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? 'center' : undefined}
              gutterButtom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Here's where we get down to business.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, proritizing
              some areas over others.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Each area is then developmed in order of importance until ready to
              be connected to the next piece.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Typically the backend, behind the scenes operatings are completed
              first. Once all the services are in place we can then creat the
              front end, user side of things.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Finishing the application doesn't mean we're done through, because
              we use extensive testing to guarantee compatibility with all
              intended devices.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Onu after our rigorous examinations will we accept a product as
              finished, then pushing it trough the production pipeine. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/buildIcon.svg"
            alt="building construction site"
            width="100%"
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        justify={matchesMD ? 'center' : undefined}
        style={{ backgroundColor: '#C1272D', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? 'center' : undefined}
              gutterButtom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              The moment we've all been waiting for.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              When construction comes to a close you're the first one to know.
              We';; give our final demonstration to show off your shiny new
              software in the wild so you know exactly how it will look to your
              users.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              When you say the world, we press the button and launch your
              project out to the public. We're there to ensure everything goes
              to plan so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/launchIcon.svg"
            alt="rocket"
            width="100%"
            style={{ maxWidth: 200 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        justify={matchesMD ? 'center' : undefined}
        style={{ backgroundColor: '#8E45CE', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Our work doesn’t end there.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/maintainIcon.svg"
            width="100%"
            alt="wrench tightening bolts"
            style={{ maxWidth: 500 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ backgroundColor: '#29ABE2', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              By planning for future features and changes we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src="/assets/iterateIcon.svg" alt="falling dominoes" width="100%" />
        </Grid>
      </Grid>