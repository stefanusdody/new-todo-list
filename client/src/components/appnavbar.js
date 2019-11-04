import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)

  },
  img: {
    width: "25px",
    marginRight: theme.spacing(1),
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const AppNavbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
         <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <HomeIcon />
            </IconButton>
             <Link color="inherit"variant="body2" className={classes.link} href="/" >
               <ListItemText>Home</ListItemText>
             </Link>
         </MenuItem>

          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
                <SystemUpdateAltIcon />
            </IconButton>
            <Link
              color="inherit"
              variant="body2"
              className={classes.link}
              href="/tech-stack"

              >
              <ListItemText>Tech Stack</ListItemText>
             </Link>
          </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default">
        <Toolbar>
           <img src={require('../assets/favicon.ico')} className={classes.img} alt=""/>
           <Typography className={classes.title} variant="h6" noWrap>
             Shopping List
           </Typography>

    <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
              <IconButton
               aria-label="exit application"
               color="inherit"
               href="/"
              >
                <Typography className={classes.title} component="p">
                 Home
                </Typography>
              </IconButton>


               <IconButton
                aria-label="exit application"
                color="inherit"
                href="/tech-stack"
                >
                   <Typography className={classes.title} component="p">
                    Tech Stack
                   </Typography>
               </IconButton>


          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default AppNavbar;
