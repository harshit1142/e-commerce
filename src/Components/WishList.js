import { useEffect, useState } from "react"
import Card from './CardCom'

const WishList = () => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedList = localStorage.getItem('wishlist');
        if(storedList.length > 0) {
            setWishList(JSON.parse(storedList));
        }
    }, []);
    
    const handleWishList = (product) => {
        let newList = [];
        wishList.forEach(item => {
            if(item.id !== product.id) 
                newList.push(item);
        })
        console.log(newList)
        localStorage.setItem('wishlist', JSON.stringify(newList));
        setWishList(newList);
    }

    return (
        <div>
          <h2>My Wishlist</h2>
          <div className="product-cards">
            {wishList.length > 0 ? (
              wishList.map((product) => (
                <Card
                  key={product.val}
                  val={product.val}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  describe={product.describe}
                  img={product.img}
                  isInWishList={true}
                  handleWishList={handleWishList}
                />
              ))
            ) : (
              <p className="h-100 w-100 display-5 text-center">No items in the wishlist!</p>
            )}
          </div>
        </div>
      );
}

export default WishList