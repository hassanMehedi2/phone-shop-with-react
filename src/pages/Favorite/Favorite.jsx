import { useEffect, useState } from "react";
import FavoriteCart from "./FavoriteCart";


const Favorite = () => {
    const [favorites, setFavorites] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    const [isShow, setShow] = useState(false);

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        if (favoriteItems) {
            setFavorites(favoriteItems);
        }
        else {
            setIsEmpty("no items found");
            setFavorites(favoriteItems);

        }
    }, [])

    const handleDelete = () => {
        localStorage.clear();
        setFavorites([]);
        setIsEmpty("no items found");

    }

    return (
        <div className="py-20">
            {isEmpty ? <div className="flex items-center justify-center">{isEmpty}</div> : <div>

                <div>
                    {favorites.length > 0 && <button onClick={handleDelete} className="flex items-center">Delete all </button>}

                    {
                        isShow ? <div> {favorites.map(phone => <FavoriteCart key={phone.id} phone={phone}></FavoriteCart>)}</div>
                            : <div>{favorites.slice(0, 2).map(phone => <FavoriteCart key={phone.id} phone={phone}></FavoriteCart>)}</div>
                    }
                </div>
                {favorites.length > 2 && <button onClick={() => setShow(!isShow)} className="flex justify-center  mx-auto bg-green-400 font-extrabold "
                    >{isShow ? "Show less" : "Show more" }</button>}
            </div>
            }

        </div>
    );
};

export default Favorite;