import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RedeemSharpIcon from '@mui/icons-material/RedeemSharp';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import NavBar from './NavBar';
import "../assets/css/Dashboard.css";
import Overview from './Overview';
import User from './User';
import { useNavigate } from 'react-router-dom';
import EnhancedTable from './EnhancedTable';
import Inventory from './Inventry';
import Footer from './Footer';
import Report from './Report';

const drawerWidth = 240;

export default function Dashboard() {

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('Dashboard'); 

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };



  const renderContent = () => {
    switch (selectedOption) {
      case 'Dashboard':
        return <Overview />;
      case 'Home':
        return <div>{navigate('/home')}</div>;
      case 'User Management':
        return <User />;
      case 'Order Management':
        return <EnhancedTable />
      case 'Inventory Management':
        return <Inventory />
      case 'Reporting and Analysis':
        return <Report/>
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='dash-nav'>
        <NavBar />
        <div>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: 'rgb(49, 49, 48)',
                overflowY: 'hidden',
              },
            }}
          >
            <Toolbar />
            <Box sx={{ color: 'white' }}>
              <List sx={{ width: '100%' }}>
                {[
                  { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'white' }} /> },
                  { text: 'Home', icon: <HomeIcon sx={{ color: 'white' }} /> },
                  { text: 'Order Management', icon: <RedeemSharpIcon sx={{ color: 'white' }} /> },
                  { text: 'User Management', icon: <AccountCircleRoundedIcon sx={{ color: 'white' }} /> },
                  { text: 'Inventory Management', icon: <InventorySharpIcon sx={{ color: 'white' }} /> },
                  { text: 'Reporting and Analysis', icon: <AutoGraphOutlinedIcon sx={{ color: 'white' }} /> },
                ].map((item, index) => (
                  <ListItem
                    key={item.text}
                    disablePadding
                    sx={{
                      backgroundColor: item.text === selectedOption ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                    }}
                  >
                    <ListItemButton onClick={() => handleOptionSelect(item.text)}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider style={{ backgroundColor: 'white' }} />
            </Box>
          </Drawer>
        </div>
        <div className='dashboard-content'>
          <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '64px' }}>
            <Typography paragraph>
              {renderContent()}
            </Typography>
          </Box>
        </div>
      </div>
      <div>
         <Footer/>
      </div>
    </div>
  );
}
