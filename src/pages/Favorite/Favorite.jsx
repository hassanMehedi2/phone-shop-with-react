import { useEffect, useState } from "react";
import FavoriteCart from "./FavoriteCart";


const Favorite = () => {
    const [favorites,setFavorites]=useState([]);
    const [isEmpty , setIsEmpty]=useState(false);

    useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        if(favoriteItems){
            setFavorites(favoriteItems);
        }
        else{
            setIsEmpty("no items found");
            setFavorites(favoriteItems);

        }
    },[])

    const handleDelete =()=>{
        localStorage.clear();
        setFavorites([]);
        setIsEmpty("no items found");

    }

    return (
        <div>
            { isEmpty ? <div className="flex items-center justify-center">{isEmpty}</div> : <div>

            <div>
            {favorites.length>0 && <button onClick={handleDelete} className="flex items-center">Delete all </button>}
         
                {
                    favorites.map(phone => <FavoriteCart key={phone.id} phone={phone}></FavoriteCart>)
                }
            </div>
            </div>
            }
            
        </div>
    );
};

export default Favorite;