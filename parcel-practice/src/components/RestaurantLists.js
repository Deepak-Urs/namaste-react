
import { restaurantList } from '../constants'

const RestaurantLists = ({data}) => {
    return data.map(item => <RestaurantCard  style={{ display: "flex", flexDirection: "row" }}{...item} key={item.id} />)
}

const RestaurantCard = ({image, name, genre, rating}) => {
    //console.log('data seen', data)
    //const {image, name, genre, rating} = data;
    return (
        <div className="card" >
            <img src={image} alt="restauarant" />
            <h2>{name}</h2>
            <h3>{genre}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}

export default RestaurantLists;