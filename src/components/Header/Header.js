import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import MenuIcon from '@mui/icons-material/Menu';
import SearchBox from '../SearchBox/SearchBox';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IoIosCart } from "react-icons/io";
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Divider, Typography } from '@mui/material';
import { MyContext } from '../../App';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header(props) {

    const [MyaccDrop, setMyaccDrop] = React.useState(null);
    const openMyaccDrop = Boolean(MyaccDrop);

    const [Notification, setNotification] = React.useState(false);
    const openNotification = Boolean(Notification);

    const [Email, setEmail] = useState(false)
    const OpenEmail = Boolean(Email)

    const context = useContext(MyContext)

    const handleOpenMyaccDrop = (event) => {
        setMyaccDrop(event.currentTarget);
    };
    const handleCloseMyaccDrop = () => {
        setMyaccDrop(null);
    };


    const handleOpenNotification = () => {
        setNotification(true);
    };
    const handleCloseNotification = () => {
        setNotification(false);
    };


    const handleOpenEmail = () => {
        setEmail(true);
    };
    const handleCloseEmail = () => {
        setEmail(false);
    };


    return (
        <>
            <header >



                <Link to={'/'} className=' logo'>
                    <img src="/assets/images/logo.webp" />
                    <span className='ml-1'>HOTASH</span>
                </Link>


                <div className=' header-group'>
                    <div className=' part2 mc-header-left'>
                        <Button
                            className='rounded-circle '
                            onClick={() => context.setIsToggaleSidebar(!context.isToggaleSidebar)}
                        >
                            {context.isToggaleSidebar === false ? <MdMenuOpen /> : <MenuIcon />}
                        </Button>
                        <SearchBox />
                    </div>
                    <div className=' part3 mc-header-right'>
                        <Button className='rounded-circle ' onClick={() => context.setThemeMode(!context.themeMode)} >
                            {context.themeMode === true ? <LightModeIcon /> : <DarkModeIcon />}
                        </Button>
                        {/* <Button className='rounded-circle '><LanguageIcon /></Button> */}
                        <div className='dropDownWrapper position-relative '>
                        <Button className='rounded-circle  ' ><IoIosCart /></Button>
                        </div>

                        <div className='dropDownWrapper position-relative'>
                            <Button className='rounded-circle ' onClick={handleOpenEmail}><EmailIcon /></Button>
                            <Menu
                                anchorEl={Email}
                                id="email"
                                className='email dropdown_list email-list'
                                open={OpenEmail}
                                onClose={handleCloseEmail}
                                onClick={handleCloseEmail}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {


                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >

                                <div className=' head pb-0 pl-3'>
                                    <h4>Messages (23)</h4>
                                </div>

                                <Divider className='mb-1 divider' />

                                <div className='scroll'>

                                    <MenuItem onClick={handleCloseEmail}>

                                        <div className='d-flex w-100'>
                                            <div className='userImg'>
                                                <a className='rounded-circle'>
                                                    <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                </a>
                                            </div>
                                            <div className='email-message'>
                                                <h4>Vaibhav Gohil</h4>
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                </p>

                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseEmail}>

                                        <div className='d-flex w-100'>
                                            <div className='userImg'>
                                                <a className='rounded-circle'>
                                                    <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                </a>
                                            </div>
                                            <div className='email-message'>
                                                <h4>Vaibhav Gohil</h4>
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                </p>

                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseEmail}>

                                        <div className='d-flex w-100'>
                                            <div className='userImg'>
                                                <a className='rounded-circle'>
                                                    <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                </a>
                                            </div>
                                            <div className='email-message'>
                                                <h4>Vaibhav Gohil</h4>
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                </p>

                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseEmail}>

                                        <div className='d-flex w-100'>
                                            <div className='userImg'>
                                                <a className='rounded-circle'>
                                                    <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                </a>
                                            </div>
                                            <div className='email-message'>
                                                <h4>Vaibhav Gohil</h4>
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                </p>

                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseEmail}>

                                        <div className='d-flex w-100'>
                                            <div className='userImg'>
                                                <a className='rounded-circle'>
                                                    <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                </a>
                                            </div>
                                            <div className='email-message'>
                                                <h4>Vaibhav Gohil</h4>
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                </p>

                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseEmail}>

                                        <div className='d-flex w-100'>
                                            <div className='userImg'>
                                                <a className='rounded-circle'>
                                                    <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                </a>
                                            </div>
                                            <div className='email-message'>
                                                <h4>Vaibhav Gohil</h4>
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                </p>

                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseEmail}>

                                        <div className='d-flex w-100'>
                                            <div className='userImg'>
                                                <a className='rounded-circle'>
                                                    <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                </a>
                                            </div>
                                            <div className='email-message'>
                                                <h4>Vaibhav Gohil</h4>
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                </p>

                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseEmail}>

                                        <div className='d-flex w-100'>
                                            <div className='userImg'>
                                                <a className='rounded-circle'>
                                                    <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                </a>
                                            </div>
                                            <div className='email-message'>
                                                <h4>Vaibhav Gohil</h4>
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                </p>

                                            </div>
                                        </div>

                                    </MenuItem>



                                </div>

                                <div className='w-100'>
                                    <Button className='btn-blue  w-100'>View all notifications</Button>
                                </div>


                            </Menu>
                        </div>


                        <div className='dropDownWrapper position-relative'>
                            <Button className='rounded-circle ' onClick={handleOpenNotification} ><NotificationsIcon /></Button>
                            <Menu
                                anchorEl={Notification}
                                id="notification"
                                className='notification dropdown_list'
                                open={openNotification}
                                onClose={handleCloseNotification}
                                onClick={handleCloseNotification}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {


                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >

                                <div className=' head pb-0 pl-3'>
                                    <h4>Notifications (34)</h4>
                                </div>

                                <Divider className='mb-1' />

                                <div className='scroll'>

                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className='d-flex '>
                                            <div className=''>
                                                <div className='userImg'>
                                                    <a className='rounded-circle'>
                                                        <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='drpodownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Vaibhav Gohil </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky'>few seconds ago!</p>
                                            </div>
                                        </div>

                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className='d-flex '>
                                            <div className=''>
                                                <div className='userImg'>
                                                    <a className='rounded-circle'>
                                                        <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='drpodownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Vaibhav Gohil </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky'>few seconds ago!</p>
                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className='d-flex '>
                                            <div className=''>
                                                <div className='userImg'>
                                                    <a className='rounded-circle'>
                                                        <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='drpodownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Vaibhav Gohil </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky'>few seconds ago!</p>
                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className='d-flex '>
                                            <div className=''>
                                                <div className='userImg'>
                                                    <a className='rounded-circle'>
                                                        <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='drpodownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Vaibhav Gohil </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky'>few seconds ago!</p>
                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className='d-flex '>
                                            <div className=''>
                                                <div className='userImg'>
                                                    <a className='rounded-circle'>
                                                        <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='drpodownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Vaibhav Gohil </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky'>few seconds ago!</p>
                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className='d-flex '>
                                            <div className=''>
                                                <div className='userImg'>
                                                    <a className='rounded-circle'>
                                                        <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='drpodownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Vaibhav Gohil </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky'>few seconds ago!</p>
                                            </div>
                                        </div>

                                    </MenuItem>

                                </div>

                                <div className='w-100'>
                                    <Button className='btn-blue  w-100'>View all notifications</Button>
                                </div>


                            </Menu>
                        </div>

                        {
                            context.isLogin === true ?
                                <div className='myAccWrapper'>
                                    <Button className='myAcc ' onClick={handleOpenMyaccDrop} >
                                        <div className='userImg'>
                                            <a className='rounded-circle'>
                                                <img src="/assets/images/Vaibhav Photo profiles.jpg" />
                                            </a>
                                        </div>
                                        <div className='userInfo'>
                                            <h3>Vaibhav Gohil</h3>
                                            <p>@vaibhav17</p>
                                        </div>
                                    </Button>
                                    <Menu
                                        anchorEl={MyaccDrop}
                                        id="account-menu"
                                        open={openMyaccDrop}
                                        onClose={handleCloseMyaccDrop}
                                        onClick={handleCloseMyaccDrop}
                                        slotProps={{
                                            paper: {
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,

                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >

                                        <MenuItem onClick={handleCloseMyaccDrop}>
                                            <ListItemIcon>
                                                <PersonIcon fontSize="small" />
                                            </ListItemIcon>
                                            My Account
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyaccDrop}>
                                            <ListItemIcon>
                                                <PrivacyTipIcon fontSize="small" />
                                            </ListItemIcon>
                                            Reset Password
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyaccDrop}>
                                            <ListItemIcon>
                                                <LockIcon fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>

                                </div>
                                :
                                <Link to={'/login'}>
                                    <Button className='btn-blue btn-lg btn-round'>Sign In</Button>
                                </Link>
                        }



                    </div>


                </div>

            </header>
        </>
    );
}

export default Header;
