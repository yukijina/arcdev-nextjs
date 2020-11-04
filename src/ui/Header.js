import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Link from '../Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// for media quary
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
//Deawer
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
// Icon
import MenuIcon from '@material-ui/icons/Menu';
//List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';

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
      [theme.breakpoints.down('md')]: {
        height: '7em',
      },
      [theme.breakpoints.down('xs')]: {
        height: '5.5em',
      },
    },
    logoContainer: {
      padding: 0,
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
      height: '45px',
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    menu: {
      //change manu background color
      backgroundColor: theme.palette.common.blue,
      color: 'white',
      borderRadius: '0px',
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
  })
);

// Props are from App.js
const Header = (props) => {
  // customersize style
  const classes = useStyles();

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

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'iOS/Android App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3,
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
  }, [props.value, menuOptions, props.selectedIndex, routes, props]); // useEffect is depending on 'value' whenever value changes, it triggers

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
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        href="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => props.setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
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
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
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
          {routes.map((route) => (
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
            >
              <img src="/assets/logo.svg" alt="company logo" className={classes.logo} />
            </Button>
            {/* we do not use matches ? here avoid strange flash rendering */}
            <Hidden mdDown>
              {tabs}
            </Hidden>
            <Hidden lgUp>
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
