import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


function SearchBox(props) {
    return (
        <div className='searchBox position-relative d-flex align-items-center'>
            <SearchIcon  className='search-icon mr-2'/>
            <input type='search' placeholder='Search Here...'/>
            
        </div>
    );
}

export default SearchBox;