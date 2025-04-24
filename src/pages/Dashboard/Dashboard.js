import React, { useContext, useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { MdHotelClass } from "react-icons/md";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Select, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HistoryIcon from '@mui/icons-material/History';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Chart } from "react-google-charts";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LayersIcon from '@mui/icons-material/Layers';
import { MyContext } from '../../App';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from 'recharts';
  
  const dataArea = [
    { month: 'JAN', invest: 4000, earning: 7400, expense: 5700 },
    { month: 'FEB', invest: 3500, earning: 6000, expense: 5000 },
    { month: 'MAR', invest: 4000, earning: 6200, expense: 5200 },
    { month: 'APR', invest: 3000, earning: 4800, expense: 4600 },
    { month: 'MAY', invest: 4500, earning: 6000, expense: 5800 },
    { month: 'JUN', invest: 5000, earning: 7000, expense: 6800 },
    { month: 'JUL', invest: 3900, earning: 7000, expense: 6780 },
    { month: 'AGU', invest: 6390, earning: 7800, expense: 5789 },
    { month: 'SEP', invest: 6400, earning: 7600, expense: 5800 },
    { month: 'OCT', invest: 8300, earning: 4800, expense: 5700 },
    { month: 'NOV', invest: 4400, earning: 7800, expense: 5800 },
    { month: 'DEC', invest: 5400, earning: 6800, expense: 5800 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded shadow text-sm">
          <p><strong>{label}</strong></p>
          <p style={{ color: '#3498db' }}>Invest : {payload[0].value}</p>
          <p style={{ color: '#2ecc71' }}>Earning : {payload[1].value}</p>
          <p style={{ color: '#ED68FF' }}>Expense : {payload[2].value}</p>
        </div>
      );
    }
    return null;
  };


export const data = [
    ["Day", "Sales"],
    ["MON", 1000],
    ["TUE", 1170],
    ["WEN", 660],
    ["THU", 1030],
    ["FRI", 1564],
    ["SAT", 950],
    ["SUN", 762],
];

export const options = {
    vAxis: { minValue: 0 },
    chartArea: { width: "90%", height: "90%" },
    backgroundColor: 'transparent', // Set background to transparent

};

const columns = [
    {
        field: 'id', headerName: 'UID',
        flex: 1,
        minWidth: 50,
        renderCell: (params) => {
            return (
                <p className='row-id'>
                    #{params.row.id}
                </p>
            )
        }
    },
    {
        field: 'product', headerName: 'product',
        flex: 1,
        minWidth: 220,
        renderCell: (params) => {
            return (
                <div className='mc-table-product-data'>
                    <img className='rounded-img' src={`assets/images/${params.row.image}`} />
                    <div className='mc-table-product-name-data'>
                        <h5>{params.row.product}</h5>
                        <h6>{params.row.desc}</h6>
                    </div>
                </div>
            )
        }
    },
    {
        field: 'category', headerName: 'category',
        flex: 1,
        minWidth: 125
    },
    {
        field: 'brand', headerName: 'brand',
        flex: 1,
        minWidth: 100
    },
    {
        field: 'price', headerName: 'price',
        flex: 1,
        minWidth: 95,
        renderCell: (params) => {
            return (
                params.row.oldPrice ? <div className='old-price-data'>
                    <h6 className='oldPrice'>${params.row.oldPrice}.00</h6>
                    <h6 className='price-data'>${params.row.price}.00</h6>
                </div> :
                    <p className='price-data'>${params.row.price}.00</p>
            )
        }
    },
    {
        field: 'stock', headerName: 'stock',
        flex: 1,
        minWidth: 90
    },
    {
        field: 'rating', headerName: 'rating',
        flex: 1,
        minWidth: 125,
        renderCell: (params) => {
            return (
                <div className='star-rating'>
                    <StarIcon className='starIcon' />
                    <h3>{params.row.rating}</h3>

                </div>
            )
        }
    },
    {
        field: 'order', headerName: 'order',
        flex: 1,
        minWidth: 90
    },
    {
        field: 'sales', headerName: 'sales',
        flex: 1,
        minWidth: 90
    },
    {
        field: 'action', headerName: 'action',
        flex: 1,
        minWidth: 140,
        renderCell: (params) => {
            return (
                <div className='table-action'>
                    <button className='view-icon'><VisibilityIcon /></button>
                    <button className='edit-icon'><EditIcon /></button>
                    <button className='delete-icon'><DeleteIcon /></button>

                </div>
            )
        }
    },

];

const rows = [
    {
        id: 1,
        product: 'Tops and skirt set for Female',
        desc: 'Women\'s exclusive set',
        category: 'womans',
        brand: 'richman',
        price: 19,
        oldPrice: 21,
        stock: 30,
        rating: 4.9,
        reviews: 16,
        order: 380,
        sales: '$38k',
        image: 'product2.webp'
    },
    {
        id: 2,
        product: 'Leather belt steve',
        desc: 'Steve madden men\'s belt',
        category: 'mans',
        brand: 'lubana',
        price: 14,
        stock: 23,
        rating: 4.5,
        reviews: 38,
        order: 189,
        sales: '$9k',
        image: 'p2.webp'
    },
    {
        id: 3,
        product: 'Navy coat blazer',
        desc: 'Nemo enim ipsam voluptatem',
        category: 'womans',
        brand: 'ecstasy',
        price: 33,
        stock: 30,
        rating: 4.1,
        reviews: 69,
        order: 380,
        sales: '$38k',
        image: 'p3.webp',
        oldPrice: 21,
    },
    {
        id: 4,
        product: 'Yellow dress kids',
        desc: 'Nemo enim ipsam voluptatem',
        category: 'kidz',
        brand: 'ecstasy',
        price: 33,
        stock: 30,
        rating: 4.4,
        reviews: 47,
        order: 380,
        sales: '$38k',
        image: 'p4.webp'
    },
    {
        id: 5,
        product: 'Checked winter shirt',
        desc: 'Nemo enim ipsam voluptatem',
        category: 'accessory',
        brand: 'ecstasy',
        price: 33,
        stock: 30,
        rating: 5.0,
        reviews: 47,
        order: 380,
        sales: '$38k',
        image: 'p5.webp'
    },
    {
        id: 6,
        product: 'Brown pants',
        desc: 'Nemo enim ipsam voluptatem',
        category: 'womans',
        brand: 'ecstasy',
        price: 33,
        stock: 30,
        rating: 3.7,
        reviews: 47,
        order: 380,
        sales: '$38k',
        oldPrice: 21,
        image: 'p6.webp'
    },
    {
        id: 7,
        product: 'Purple lace dress',
        desc: 'Nemo enim ipsam voluptatem',
        category: 'womans',
        brand: 'ecstasy',
        price: 33,
        originalPrice: 44,
        stock: 30,
        rating: 4.5,
        reviews: 47,
        order: 380,
        sales: '$38k',
        image: 'p7.webp'
    },
    {
        id: 8,
        product: 'Denim jeans',
        desc: 'Classic fit blue jeans',
        category: 'mans',
        brand: 'levis',
        price: 49,
        stock: 25,
        rating: 4.8,
        reviews: 22,
        order: 290,
        sales: '$25k',
        image: 'p8.webp'
    },
    {
        id: 9,
        product: 'Kids hoodie',
        desc: 'Cozy and soft kids hoodie',
        category: 'kidz',
        brand: 'gap',
        price: 28,
        stock: 40,
        rating: 4.3,
        reviews: 31,
        order: 210,
        sales: '$17k',
        image: 'p9.webp'
    },
    {
        id: 10,
        product: 'Elegant heels',
        desc: 'High heel for party wear',
        category: 'womans',
        brand: 'aldo',
        price: 59,
        stock: 15,
        rating: 4.6,
        reviews: 29,
        order: 160,
        sales: '$12k',
        image: 'p10.webp',
        oldPrice: 21,
    },

];



function Dashboard(props) {

    const [AnchorEl, setAnchorEl] = useState(null);
    const [showBy, setshowBy] = useState('');
    const [CRUD_Action, setCRUD_Action] = useState(null);

    const openCRUD_Action = Boolean(CRUD_Action);
    const openAnchorEl = Boolean(AnchorEl);

    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarandHeader(false)
    }, [])

    const handleOpenAnchorEl = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAnchorEl = () => {
        setAnchorEl(null);
    };



    const handleOpenCRUD_Action = (event) => {
        setCRUD_Action(event.currentTarget);
    };
    const handleCloseCRUD_Action = () => {
        setCRUD_Action(null);
    };


    return (
        <div>
            <div className='right-content w-100'>
                <div className='row dashboardBoxWrapperRow'>
                    <div className='col-xl-8'>
                        <div className='dashboardBoxWrapper d-flex'>
                            <div className='dashboardBox green'>
                                <TrendingUpIcon className='growIcon' />
                                <div className='dashboardBoxHead'>
                                    <h4>
                                        <span>total users</span>
                                        277
                                    </h4>
                                    <div className='dashboardBoxicon'> <AccountCircleIcon /></div>
                                </div>
                                <div className='dashboardBoxFoot'>
                                    <div className='boxFootDate'>
                                        <h6>last month</h6>
                                    </div>
                                    <div className='boxFootIcon'>
                                        <Button onClick={handleOpenAnchorEl}>
                                            <MoreVertIcon />
                                        </Button>
                                        <Menu
                                            anchorEl={AnchorEl}
                                            id="last-time"
                                            open={openAnchorEl}
                                            onClose={handleCloseAnchorEl}
                                            onClick={handleCloseAnchorEl}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,

                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last day
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last week
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last month
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last year
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            <div className='dashboardBox purple'>
                                <TrendingDownIcon className='growIcon' />
                                <div className='dashboardBoxHead'>
                                    <h4>
                                        <span>total orders
                                        </span>
                                        338
                                    </h4>
                                    <div className='dashboardBoxicon'> <ShoppingCartIcon /></div>
                                </div>
                                <div className='dashboardBoxFoot'>
                                    <div className='boxFootDate'>
                                        <h6>last month</h6>
                                    </div>
                                    <div className='boxFootIcon'>
                                        <Button className='toggleIcon' onClick={handleOpenAnchorEl}>
                                            <MoreVertIcon />
                                        </Button>
                                        <Menu
                                            anchorEl={AnchorEl}
                                            id="last-time"
                                            open={openAnchorEl}
                                            onClose={handleCloseAnchorEl}
                                            onClick={handleCloseAnchorEl}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {

                                                        mt: 1.5,

                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last day
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last week
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last month
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last year
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            <div className='dashboardBox blue'>
                                <TrendingDownIcon className='growIcon' />
                                <div className='dashboardBoxHead'>
                                    <h4>
                                        <span>total products</span>
                                        557
                                    </h4>
                                    <div className='dashboardBoxicon'> <ShoppingBagIcon /></div>
                                </div>
                                <div className='dashboardBoxFoot'>
                                    <div className='boxFootDate'>
                                        <h6>last month</h6>
                                    </div>
                                    <div className='boxFootIcon'>
                                        <Button onClick={handleOpenAnchorEl}>
                                            <MoreVertIcon />
                                        </Button>
                                        <Menu
                                            anchorEl={AnchorEl}
                                            id="last-time"
                                            open={openAnchorEl}
                                            onClose={handleCloseAnchorEl}
                                            onClick={handleCloseAnchorEl}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {

                                                        mt: 1.5,

                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last day
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last week
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last month
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last year
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            <div className='dashboardBox yellow'>
                                <TrendingUpIcon className='growIcon' />
                                <div className='dashboardBoxHead'>
                                    <h4>
                                        <span>total reviews</span>
                                        166
                                    </h4>
                                    <div className='dashboardBoxicon'> <MdHotelClass /></div>
                                </div>
                                <div className='dashboardBoxFoot'>
                                    <div className='boxFootDate'>
                                        <h6>last month</h6>
                                    </div>
                                    <div className='boxFootIcon'>
                                        <Button onClick={handleOpenAnchorEl}>
                                            <MoreVertIcon />
                                        </Button>
                                        <Menu
                                            anchorEl={AnchorEl}
                                            id="last-time"
                                            open={openAnchorEl}
                                            onClose={handleCloseAnchorEl}
                                            onClick={handleCloseAnchorEl}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {

                                                        mt: 1.5,

                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last day
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last week
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last month
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last year
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 pl-0'>
                        <div className='box graphBox'>
                            <div className='graphBoxDetails'>
                                <div className='dashboardBoxFoot'>
                                    <div className='boxFootDate'>
                                        <h6>total sales </h6>
                                    </div>
                                    <div className='boxFootIcon'>
                                        <Button onClick={handleOpenAnchorEl}>
                                            <MoreHorizIcon />
                                        </Button>
                                        <Menu
                                            anchorEl={AnchorEl}
                                            id="last-time"
                                            open={openAnchorEl}
                                            onClose={handleCloseAnchorEl}
                                            onClick={handleCloseAnchorEl}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,

                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last day
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last week
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last month
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseAnchorEl}>
                                                <ListItemIcon>
                                                    <HistoryIcon fontSize="small" />
                                                </ListItemIcon>
                                                last year
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                                <div className='graph-sale-amount'>
                                    <h3>$3,787,681.00</h3>

                                </div>
                                <p className='mc-sales-card-compare'>$3,578.90 in last month</p>
                            </div>
                            <div>
                                <Chart
                                    chartType="PieChart"
                                    width="100%"
                                    height="100%"
                                    data={data}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='col-xl-12'> */}
                <div className='table-card'>
                    <div className='table-card-header'>
                        <h4 className='card-header-tital'>best selling products</h4>
                        <div className="table-card-CRUD CRUD-dropdown">
                            <Button onClick={handleOpenCRUD_Action}>
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                anchorEl={CRUD_Action}
                                id="last-time"
                                className='menu-show'
                                open={openCRUD_Action}
                                onClose={handleCloseCRUD_Action}
                                onClick={handleCloseCRUD_Action}
                                slotProps={{
                                    paper: {
                                        elevation: 0,

                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >

                                <MenuItem onClick={handleCloseCRUD_Action}>
                                    <ListItemIcon>
                                        <EditIcon fontSize="small" />
                                    </ListItemIcon>
                                    Edit
                                </MenuItem>
                                <MenuItem onClick={handleCloseCRUD_Action}>
                                    <ListItemIcon>
                                        <DeleteIcon fontSize="small" />
                                    </ListItemIcon>
                                    Delete
                                </MenuItem>
                                <MenuItem onClick={handleCloseCRUD_Action}>
                                    <ListItemIcon>
                                        <DownloadIcon fontSize="small" />
                                    </ListItemIcon>
                                    Download
                                </MenuItem>

                            </Menu>
                        </div>
                    </div>
                    <div className='table-data-select'>
                        <div className='col'>
                            <div className='mc-label-field-group label-col'>
                                <label className='mc-label-field-title'>category by</label>
                                <select className='mc-label-field-select'>
                                    <option value={"12row"}>12 row</option>
                                    <option value={"24row"}>24 row</option>
                                    <option value={"36row"}>36 row</option>
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='mc-label-field-group label-col'>
                                <label className='mc-label-field-title'>brand by</label>
                                <select className='mc-label-field-select'>
                                    <option value={"mens"}>mens</option>
                                    <option value={"womens"}>womens</option>
                                    <option value={"kids"}>kids</option>
                                    <option value={"accessory"}>accessory</option>
                                </select>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='mc-label-field-group label-col'>
                                <label className='mc-label-field-title'>show by</label>
                                <select className='mc-label-field-select'>
                                    <option value={"ecstasy"}>ecstasy</option>
                                    <option value={"freeland"}>freeland</option>
                                    <option value={"rongdhonu"}>rongdhonu</option>

                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='mc-label-field-group label-col'>
                                <label className='mc-label-field-title'>search by</label>
                                <input
                                    className='mc-label-field-search-input'
                                    type='search'
                                    placeholder='id / name / category / brand'
                                />

                            </div>
                        </div>
                    </div>

                    <div className='table-card-details'>
                        <Box sx={{ height: '100%', width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                rowHeight={76}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 10,
                                        },
                                    },
                                }}
                                pageSizeOptions={[10]}
                            // checkboxSelection
                            />
                        </Box>

                    </div>
                </div>
                {/* </div> */}
                <div className='col-xl-8'>
                    <div className='table-card'>
                        <div className='card-revenue-header'>
                            <h4 className='card-header-tital'>revenue report</h4>
                            <div className='card-revenue-select'>
                                <i className='material-icons'><CalendarMonthIcon /></i>
                                <select>
                                    <option>Select Option</option>
                                    <option value={'year2021'}>year 2021</option>
                                    <option value={'year2020'}>year 2020</option>
                                    <option value={'year2019'}>year 2019</option>
                                    <option value={'year2018'}>year 2018</option>
                                    <option value={'year2017'}>year 2017</option>
                                    <option value={'year2016'}>year 2016</option>
                                    <option value={'year2015'}>year 2015</option>
                                </select>
                            </div>
                        </div>
                        <div className='card-revenue-group'>
                            <div className='card-revenue-group-report'>

                                <svg width={0} height={0}>
                                    <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                        <stop offset={0} stopColor="#2b77e5" />
                                        <stop offset={1} stopColor="#64b3f6" />
                                    </linearGradient>
                                </svg>
                                <CasesRoundedIcon sx={{ fill: "url(#linearColors)" }} />
                                <h3>
                                    <span>invested</span>
                                    3,387.67K
                                </h3>

                            </div>
                            <div className='card-revenue-group-report'>
                                <svg width={0} height={0}>
                                    <linearGradient id="green" x1={1} y1={0} x2={1} y2={1}>
                                        <stop offset={0} stopColor="#1a9f53" />
                                        <stop offset={1} stopColor="#4eda89" />
                                    </linearGradient>
                                </svg>
                                <BookmarksIcon sx={{ fill: "url(#green)" }} />
                                <h3>
                                    <span>earnings</span>
                                    2,856.35K
                                </h3>

                            </div>
                            <div className='card-revenue-group-report'>
                                <svg width={0} height={0}>
                                    <linearGradient id="purpel" x1={1} y1={0} x2={1} y2={1}>
                                        <stop offset={0} stopColor="#be0ee1" />
                                        <stop offset={1} stopColor="#ed68ff" />
                                    </linearGradient>
                                </svg>
                                <LayersIcon sx={{ fill: "url(#purpel)" }} />
                                <h3>
                                    <span>expenses</span>
                                    1,994.12K
                                </h3>
                            </div>
                        </div>
                        <div className='w-100 h-100'>
                            <ResponsiveContainer width="100%" height={400}>
                                <AreaChart
                                    data={dataArea}
                                >
                                    <defs>
                                        <linearGradient id="colorInvest" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3498db" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3498db" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorEarning" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#2ecc71" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ED68FF" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#ED68FF" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="stepAfter" dataKey="invest" stroke="#3498db" fillOpacity={1} fill="url(#colorInvest)" />
                                    <Area type="stepAfter" dataKey="earning" stroke="#2ecc71" fillOpacity={1} fill="url(#colorEarning)" />
                                    <Area type="stepAfter" dataKey="expense"  stroke="#ED68FF" fillOpacity={1} fill="url(#colorExpense)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4'>
                    <div className='table-card'>

                    </div>
                </div>
            </div>
        </div>
    );
}



export default Dashboard;