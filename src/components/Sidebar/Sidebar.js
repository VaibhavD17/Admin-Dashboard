import React, { useContext, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PixIcon from '@mui/icons-material/Pix';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ClassIcon from '@mui/icons-material/Class';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { MyContext } from '../../App';

function Sidebar(props) {

    const [activeTab, setActiveTab] = useState(null)
    const [isToggalSubmenu, setisToggalSubmenu] = useState(false)

    const context = useContext(MyContext);


    const isOpenSubmenu = (index) => {

        setActiveTab(index)
        setisToggalSubmenu(!isToggalSubmenu)
    }

    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Button className={`w-100 ${activeTab === 0 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                        <span className='icon'><DashboardIcon /></span>
                        Dashboard
                        <span className='arrow'><ChevronRightIcon /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 0 && isToggalSubmenu === true ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to={'#'}>ecommerce</Link></li>
                            <li><Link to={'#'}>analytics</Link></li>
                            <li><Link to={'#'}>Crm</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 1 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                        <span className='icon'><LockIcon /></span>
                        authentication
                        <span className='arrow'><ChevronRightIcon /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 1 && isToggalSubmenu === true ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/register'}>registration</Link></li>
                            <li><Link to={'/forgotpassword'}>forgot password</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 2 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                        <span className='icon'><AccountCircleIcon /></span>
                        User
                        <span className='arrow'><ChevronRightIcon /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 2 && isToggalSubmenu === true ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to={'#'}>user list</Link></li>
                            <li><Link to={'#'}>user profile</Link></li>
                            <li><Link to={'#'}>my account</Link></li>
                        </ul>
                    </div>
                </li>
                <li>

                    <Button className={`w-100 ${activeTab === 3 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                        <span className='icon'><PixIcon /></span>
                        products
                        <span className='arrow'><ChevronRightIcon /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 3 && isToggalSubmenu === true ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to={'#'}>Product List</Link></li>
                            <li><Link to={'#'}>Product View</Link></li>
                            <li><Link to={'#'}>Product Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 4 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                        <span className='icon'><ArticleIcon /></span>
                        invoices
                        <span className='arrow'><ChevronRightIcon /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 4 && isToggalSubmenu === true ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to={'#'}>invoices list</Link></li>
                            <li><Link to={'#'}>invoices details</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to={'/'}>
                        <Button className={`w-100 ${activeTab === 5 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                            <span className='icon'><ShoppingCartIcon /></span>
                            orders
                            <span className='arrow'><ChevronRightIcon /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <Button className={`w-100 ${activeTab === 6 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                            <span className='icon'><EmailIcon /></span>
                            messages
                            <span className='arrow'><ChevronRightIcon /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <Button className={`w-100 ${activeTab === 7 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}>
                            <span className='icon'><NotificationsIcon /></span>
                            notifications
                            <span className='arrow'><ChevronRightIcon /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <Button className={`w-100 ${activeTab === 8 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}>
                            <span className='icon'><SettingsIcon /></span>
                            Settings
                            <span className='arrow'><ChevronRightIcon /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <Button className={`w-100 ${activeTab === 9 && isToggalSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(9)}>
                            <span className='icon'><ClassIcon /></span>
                            blank page
                            <span className='arrow'><ChevronRightIcon /></span>
                        </Button>
                    </Link>
                </li>

            </ul>
            <br />
            <div className='logoutWrapper'>
                <div className='logoutBox'>

                    <Button variant="contained"> <LogoutIcon /> Logout</Button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;