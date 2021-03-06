import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Link from '../Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//For nextjs, use url to import files
// import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  // this triggers event (scroll)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    // when/how far event is triggered when user scroll
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// inline styles - when you want to customerize theme or create styles
// if you want to centrilize theme (if you want to apply not just in this component but want to use other components, you can add to Theme dierectly and can get with like '...theme.typography.tab)
const useStyles = makeStyles((theme) =>
  // you can name key and apply it to className
  ({
    toolbarMargin: {
      // check defaultTheme https://material-ui.com/customization/default-theme/
      // copy them.mixins.toolbar (from Theme) and only change marginBottom
      ...theme.mixins.toolbar,
      marginBottom: '3em',
      [theme.breakpoints.down('md')]: {
        marginBottom: '2em',
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: '1.25em',
      },
    },
    logo: {
      height: '8em',
      textTransform: 'none',
      [theme.breakpoints.down('md')]: {
        height: '7em',
      },
      [theme.breakpoints.down('xs')]: {
        height: '5.5em',
      },
    },
    logoContainer: {
      padding: 0,
      width: '18rem',
      '&:hover': {
        backgroundColor: 'transparent', // eliminate a little opacity(black shade) when hovered
      },
    },
    tabContainer: {
      // set left margin to auto (extends and push all tabls to right)
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px', // We use px here because we want to have consistant space regardless screen size
      color: '#ffffff'
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '48px',
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    menu: {
      //change manu background color
      backgroundColor: theme.palette.common.blue,
      color: 'white',
      borderRadius: '0px',
      zIndex: 1302
    },
    menuItem: {
      ...theme.typography.tab,
      // opacity - change text color darker when it was hovered
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
      },
    },
    drawerIconContainer: {
      marginLeft: 'auto', //move icon to right
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawerIcon: {
      height: '50px',
      width: '50px',
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      opacity: 0.7,
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange,
    },
    drawerItemSelected: {
      // Set style for each list items. style item text which is opacity 1 of it's root
      '& .MuiListItemText-root': {
        opacity: 1,
      },
      // opacity: 1,
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1, //material-ui zIndex - zIndex of modal component + 1
    },
    expansion: {
      backgroundColor: theme.palette.common.blue,
      borderBottom: '1px solid rgba(0,0,0.12)',
      "&.Mui-expanded" : {
        margin: 0,
        borderBottom: 0
      }
    },
    "&::before": {
      backgroundColor:  'rgba(0,0,0, 0)',
    },
    expansionDetails: {
      padding: 0,
      backgroundColor: theme.palette.primary.light
    },
    expansionSummary: {
      padding: '0 24px 0 16px',
      "&:hover" : {
        backgroundColor: "rgba(0,0,0,0.08)"
      },
      backgroundColor: props => props.value === 1 ? 'rgba(0,0,0,0.14' : 'inherit'
    }
  })
);

// Props are from App.js
const Header = (props) => {
  // By adding 'props' as argument, useStyle above can access to props
  const classes = useStyles(props);

  // theme and matches are for media query
  const theme = useTheme();
  //small size or below - in the lecture, it was md (medium) but due to my screen size, I have changed it to sm
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // menu and menu items
  //* we moved the first two const to App.js. Pass props from App (also can be used to other component)
  //const [value, setValue] = useState(0);
  //const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [previousURL, setPreviousURL] = useState('') 

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    // setOpen(true);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    //setOpen(false);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    //setOpen(false);
    setOpenMenu(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const menuOptions = [
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: 'iOS/Android App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
    { name: 'Estimate', link: '/estimate', activeIndex: 5 },
  ];

  useEffect(() => { 
    // google analytics - comment on when you apply analytics
    // if url is same page, it will not run but if different ga is applied
    // per page visit 
    if (previousURL !== window.location.pathname) {
      setPreviousURL(window.location.pathname) 
      ReactGA.pageview(window.location.pathname + window.location.search)
    }

    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/estimate':
          if (props.value !== 5) {
            props.setValue(5);
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]); 

  // Refactor - cause anchorEl errors at Revolution page
  // const path = typeof window !== "undefined" ? window.location.pathname : null;

  // const activeIndex = () => {
  //   const found = routes.find(({ link }) => link === path)
  //   const menuFound = menuOptions.find(({ link }) => link === path )

  //   if (menuFound) {
  //     props.setValue(1)
  //     props.setSelectedIndex(menuFound.selectedIndex)
  //   } else if (found === undefined) {
  //     props.setValue(false)
  //   } else {
  //     props.setValue(found.activeIndex)
  //   }
  // }

  // useEffect(() => {
  //   activeIndex()
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, [path])


  const tabs = (
    <>
      {/* refactor as above */}
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        // indicatorColor="primary" if you want to change the indicator color
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        href="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {props.setValue(5); ReactGA.event({ category: "Estimate", action: "Desktop Header Pressed"})}}
      >
        Free Estimate
      </Button>
      <Popper 
        open={openMenu} 
        anchorEl={anchorEl} 
        placement="bottom-start" 
        role={undefined} 
        transition 
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: "top-left" }}
          >
            <Paper classes={{ root: classes.menu}} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList 
                  onMouseOver={() => setOpenMenu(true)}
                  onMouseLeave={handleClose}
                  autoFocusItem={false}
                  id="simple-menu" 
                  onKeyDown={handleListKeyDown}
                  disablePadding
                >
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      key={`${option}${i}`}
                      component={Link}
                      href={option.link}
                      classes={{ root: classes.memuItem }}
                      onClick={(event) => {
                        handleMenuItemClick(event, i);
                        props.setValue(1);
                        handleClose();
                      }}
                      selected={i === props.selectedIndex && props.value === 1 && window.location.pathname !== "/services"}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        //open={open}
        open={openMenu}
        onClose={handleClose}
        // This enables to track. When mouseleave, menuItem is closed
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }} //Not className but use classes for paper. Access to paper component
        elevation={0} //remove subtle popup when user mouseovered menu
        style={{ zIndex: 1302 }} //It is one above the appBar
        keepMounted //menu is always mounted on the dom - it is better for the SEO too
      >
        
      </Menu> */}
    </>
  );

  // Drawer
  const drawer = (
    <>
      {/* SwipeableDrawer helps mobile performance - can swipe drawer */}
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        {/* add save margin as navigation bar so that drawer is pushed down under the logo */}
        <div className={classes.toolbarMargin} />
        {/* disablePadding - there is a tiny padding and remove that */}
        <List disablePadding>
          {routes.map((route) => route.name === "Services" ? (
            <ExpansionPanel elevation={0} classes={{ root:  classes.expansion }} key={route.name}>
              <ExpansionPanelSummary 
                classes={{ root: classes.expansionSummary }} 
                expandIcon={<ExpandMoreIcon color="secondary" />}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography
                  style={{ opacity: props.value === 1 ? 1 : null }}
                >
                  {route.name}
                </ListItemText>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails classes={{ root: classes.expansionDetails}}>
                <Grid container direction="column">
                  {menuOptions.map(route => (
                    <Grid item key={`${route}${route.selectedIndex}`}>
                      <ListItem
                        divider
                        button
                        component={Link}
                        href={route.link}
                        selected={props.selectedIndex === route.selectedIndex && props.value === 1 && window.location.pathnema !== "/services"}
                        classes={{ selected: classes.drawerItemSelected }}
                        onClick={() => {
                          setOpenDrawer(false);
                          props.setSelectedIndex(route.selectedIndex);
                        }}
                      >
                        <ListItemText
                          className={classes.drawerItem}
                          disableTypography
                          onClick={() => {
                            setOpenDrawer(false); 
                            props.setValue(route.activeIndex);
                          }}
                        >
                          <Link href={route.link} color="inherit">
                            {route.name.split(" ").filter(word => word !== "Development").join(" ")}
                            <br />
                            <span style={{ fontSize: "0.75rem"}}>Development</span>
                          </Link>
                        </ListItemText>
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ) : (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              href={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
              ReactGA.event({ category: "Estimate", action: "Mobile Header Pressed"});
            }}
            divider
            button
            component={Link}
            href="/estimate"
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSeletected,
            }}
            selected={props.value === 5}
          >
            <ListItemText
              className={classes.drawerItem}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      />
      <MenuIcon className={classes.drawerIcon} />
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          {/* disableGutters removes paddings. disableGutters=true but we can just say disableGutters */}
          <Toolbar disableGutters>
            {/* Make log to Link - wrap with Button and add component={Link} */}
            {/* Button has padding so we will delete the padding by logoContainer above */}
            <Button
              component={Link}
              href="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)} //change indicator to Home
              disableRipple //disable default repple effect (if you want, you can leave it as default)
              style={{textDecoration: 'none'}}
            >
             {/* use svg insted of img - for safari */}
              <svg 
                className={classes.logo} 
                id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 480 139">
                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z"/>
                <path className="st0" d="M-1 139h479.92v.01H-1z"/>
                <text transform="translate(261.994 65.233)" name="st1 st2" fontSize="54">Development</text>
                <path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"/>
                <path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9"/>
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z"/>
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                    <path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"/>
                    </g>
                  </g>
                </g>
                <path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"/>
              </svg>
            </Button>
            {/* we do not use matches ? here avoid strange flash rendering */}
            <Hidden smDown>
              {tabs}
            </Hidden>
            <Hidden mdUp>
              {drawer}
            </Hidden>
            {/* https://material-ui.com/api/typography/ */}
            {/* <Typography variant="h3">Arc Development</Typography> */}
            {/* Tabs value is like index. if Tab=0, firstTab is indicated, We change the value by onChange  */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* this gives margin bottom under nav */}
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
