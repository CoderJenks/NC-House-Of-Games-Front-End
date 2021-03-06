import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Link} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    justifyContent: 'center',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const {user,logout, isLoggedIn} = useContext(UserContext);

  const loginButton = () => {
    if(isLoggedIn){
      return (
        <ListItem button key={"Logout"} onClick={logout}>
          <ListItemIcon>
            <MeetingRoomOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      )
    } else {
      return (
        <ListItem button key={"Login"} onClick={logout}>
          <ListItemIcon>
            <MeetingRoomOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Login"} />
        </ListItem>
      )
    }
  }

  return (
    <Box >
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{
           backgroundColor: '#eb1b24',
           maxWidth: "1"
           }}>
        <Toolbar minheight="50" >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
            sx={{
              display: "flex",
              flexBasis: "100%",
              justifyContent: "center"
              }}
          >
            {/* change from typography to header component? */}
            <Typography variant="h1" fontFamily="sans-serif" fontWeight="700" fontSize="1.75rem" flexShrink={1}>
              NC House of Games
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className="Drawer" 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Change List to MenuList and ListItem to MenuItem? */}
        <List >
          <Link to={"/user-profile"}>
            <ListItem button key={"Profile"} onClick={handleDrawerClose}>
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItem>
          </Link>

          <Link to={"/"} onClick={handleDrawerClose}>
            {loginButton()}
          </Link>
          
        </List>
        <Divider />
        <List>
          {['Reviews', 'Categories',
          //  'Authors'
          ].map((text, index) => (
            <Link to={`/${text}`}>
                <ListItem button key={text} onClick={handleDrawerClose}>
                    <ListItemIcon>
                        {index % 3 === 0 ?
                        <FeedOutlinedIcon /> :
                        (index % 2 === 0 ? <MenuBookOutlinedIcon /> : <CategoryOutlinedIcon />) }       
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            </Link>
          ))}
        </List>       
      </Drawer>
      <Main open={open}>
      </Main>
    </Box>
  );
}
