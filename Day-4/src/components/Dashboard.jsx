import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RedeemSharpIcon from '@mui/icons-material/RedeemSharp';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import perfume from '../perfume.png';
import Footer from './Footer' ;

const drawerWidth = 240;

export default function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const userName = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'rgb(49, 49, 48)' }}>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'serif',
              fontWeight: 1000,
              letterSpacing: '.3rem',
              color: 'rgb(234, 94, 34)',
              textDecoration: 'none',
            }}
          >
            PerfumePalette
          </Typography>
          <Button color="inherit" sx={{ ml: 'auto', color: 'pink' }} onClick={() => navigate("/")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'rgb(49, 49, 48)' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', color: 'white' }}>
          <List sx={{ width: '100%' }}>
            {[
              { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'white' }} />, link: '/dashboard' },
              { text: 'Home', icon: <HomeIcon sx={{ color: 'white' }} />, link: '/home' },
              { text: 'Order Management', icon: <RedeemSharpIcon sx={{ color: 'white' }} />, link: '/orders' },
              { text: 'User Management', icon: <AccountCircleRoundedIcon sx={{ color: 'white' }} />, link: '/user' },
              { text: 'Fragrance Management', icon: <img src={perfume} alt="fragrance" style={{ width: '30px', height: '30px', backgroundColor: 'rgb(49, 49, 48)', color: 'rgb(49, 49, 48)' }} />, link: '/fragrance' },
              { text: 'Inventory Management', icon: <InventorySharpIcon sx={{ color: 'white' }} />, link: '/inventory' },
              { text: 'Reporting and Analysis', icon: <AutoGraphOutlinedIcon sx={{ color: 'white' }} />, link: '/report' },
              { text: 'Search and Filter', icon: <TuneOutlinedIcon sx={{ color: 'white' }} />, link: '/search' },
            ].map((item, index) => (
              <Link to={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider style={{ backgroundColor: 'white' }} />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          <div>
            <h3>Welcome, {userName}!!!</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft:'60px' , paddingTop:'20px'}}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '200px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: 'rgb(219, 110, 56)',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
                cursor:'pointer' 
              }}
            >
              <h3>Total Number of Users: 500</h3>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '200px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: 'silver',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
                cursor:'pointer' 
              }}
            >
              <h3>Total Number of Fragrances: 1500</h3>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '200px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: 'rgb(201, 127, 208)',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
                cursor:'pointer' 
              }}
            >
              <h3>Number of Fragrances sold: 600</h3>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '230px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: 'rgb(100, 230, 148)',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
                cursor:'pointer' 
              }}
            >
              <h3>Number of fragrances in stock: 900</h3>
            </Box>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft:'60px' , paddingTop:'40px'}}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '200px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: 'rgb(219, 110, 56)',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
                cursor:'pointer' 
              }}
            >
              <h3>Total Number of Orders: 500</h3>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '200px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: 'silver',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
                cursor:'pointer' 
              }}
            >
              <h3>Favorite Fragrances : 15</h3>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '200px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: 'rgb(201, 127, 208)',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
                cursor:'pointer' 
              }}
            >
              <h3>Inventry Quantity : 100KG</h3>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '230px',
                height: '100px',
                borderRadius: '10px',
                backgroundColor: 'rgb(100, 230, 148)',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
                cursor:'pointer' 
              }}
            >
              <h3>Fragrance Delivery</h3>
            </Box>
            
          </div>
        </Typography>
      </Box>
    </Box>
    <Box mt="auto">
        <Footer />
      </Box>
    </div>
  );
}
