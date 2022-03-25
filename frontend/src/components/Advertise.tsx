const Advertise = () => {
  return (
    <div id="advertise-container">
      <h1 className="advertise-header">
        Top <span id="top-number">1</span> Seller
      </h1>
      <figure id="ad-img-container">
        <img
          src={"/images/coffee.jpg"}
          id="ad-coffee-img"
          alt={"cà phê"}
          width="210"
          height="210"
        />
        <img
          src={"/images/mask.jpg"}
          id="ad-mask-img"
          alt={"cà phê"}
          width="215"
          height="215"
        />
        <figcaption className="hide">coffee</figcaption>
      </figure>
      <button className="advertise-btn">
        <span className="btn-arrow-text">Xem</span>
      </button>
    </div>
  );
};

export default Advertise;
