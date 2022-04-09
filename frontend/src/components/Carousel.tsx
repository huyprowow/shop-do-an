import { i_homeStateData } from "../types/home";

const Carousel = (props: { foods: i_homeStateData[] }) => {

  return (
    <div id="carousel-container">
      {props.foods ? (
        props.foods.map((food, index) => {
          return (
            <div className="carousel-item" key={food._id}>
              <img src={food.image} alt={food.name} width="200" height="200" />
              <p>
                price: <span className="price">{food.price}$</span> only
                {food.status ? (
                  <span className="status-span-onsale">On sale</span>
                ) : (
                  <span className="status-span-outofstock">Out of stock</span>
                )}
              </p>
              <h3>{food.name}</h3>
            </div>
          );
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Carousel;
