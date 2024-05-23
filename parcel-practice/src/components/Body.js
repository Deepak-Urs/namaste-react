import React, { useState } from 'react'

import { restaurantList } from '../constants'
import RestaurantLists from './RestaurantLists'


const Body = () => {
    const [searchTxt, setSeacrhTxt] = useState("")
    //const [searchClicked, setSearchClicked] = useState('false');
    const [resList, setResList] = useState(restaurantList)
    //const res= restaurantList.filter(item => item['name'].includes('kf'));
    //console.log(res);
    
    const filterData = (filterText) => {
        
        const filteredRes = restaurantList.filter(item => item['name'].includes(filterText));
        console.log('filterData', filterData)
        return filteredRes
        ;
    }

    return (
        <div >
            
            <div className="search-box">
                <input type="text" className='search__input' placeholder='Search' value={searchTxt} onChange={(e) => {setSeacrhTxt(e.target.value); }}/>

                {/*<input type="submit" onClick={() => searchClicked == "true" ? setSearchClicked("false") : setSearchClicked("true")} />
                */}
                <input type="submit" onClick={() => {
                    
                    const data = filterData(searchTxt);
                    setResList(data)
                    }} />

                

                {/*<h1>{searchClicked}</h1>*/}
                {searchTxt}
            </div>
            <div className="restaurant__lists" style={{ display: "flex", flexDirection: "row" }}>
            <RestaurantLists data={resList} />
            </div>

        </div>
    )
}

export default Body
