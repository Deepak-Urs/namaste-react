import React, { useEffect, useState } from 'react'

import { restaurantList } from '../constants'
import RestaurantLists from './RestaurantLists'


const Body = () => {
    const [searchTxt, setSeacrhTxt] = useState("")
    const [resList, setResList] = useState([])
    

    useEffect(() => {
        getRestaurants()
        console.log("useEffect")
    }, [searchTxt])
    console.log("render")

    async function getRestaurants() {
        try {
            setTimeout(() => {console.log('Calling API')}, )
            const data = await restaurantList;
            setTimeout(() => setResList(data), 2500)
        }
        catch(err) {
            console.log(err)
        }
    }

    
    const filterData = (filterText, restauarants) => {
        console.log('filterText', filterText)
        //const newList = restauarants.filter(i => i.name == filterText)
        const newList = restauarants.filter(i => i.name.toLowerCase().includes(filterText.toLowerCase()))
        return newList
    }

    return (
        <div >
            
            <div className="search-box">

                <input type="text" className='search__input' placeholder='Search' value={searchTxt} onChange={(e) => {setSeacrhTxt(e.target.value); console.log(searchTxt)}}/>

                <button 
                    onClick={() => {
                        const data = filterData(searchTxt, restaurantList)
                        if(data.length === 0) {
                            setResList([])
                        }
                        else {
                            setResList(data)
                        }
                    }}
                > 
                Search
                </button>

                

                {/*<h1>{searchClicked}</h1>*/}
                {searchTxt}csa
            </div>
            <div className="restaurant__lists" style={{ display: "flex", flexDirection: "row" }}>
            {resList && resList.length ? <RestaurantLists data={resList} /> : searchTxt && resList.length == 0 ? <h1>No results</h1> : <h1>SIMMER UI</h1>}
            </div>

        </div>
    )
}

export default Body
