import React from 'react'

export const Title = () => {
  return (
        <div>
            <img src="../../unnamed.webp" alt="logo" />
            <h2>Food Villa</h2>
        </div>
  )
}


const HeaderComponent = () => 
        <div className="header">  
            <Title titleName="FoodVilla"/>
            {/*<h1>Food Villa</h1>*/}
            <div className="nav-items" style={{backgroundColor: 'orange'}}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
            
        </div>


export default HeaderComponent;
