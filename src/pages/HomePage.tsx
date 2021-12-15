import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../types/store";
import { i_homeStateData, i_home_props } from "../types/home";
import { actionGetFoodRequest } from "../actions/home";

import Carousel from "../components/Carousel";
import SlideImage from "../components/SlideImage";

const HomePage = (props: i_home_props) => {
  // const [data, setData] = useState([]);//k can den vi lay du lieu tren store
  console.log(props);

  useEffect(() => {
    props.getAllFoodRequest();
  }, []);

  return (
    <>
      <h1 id="home-panel">
        <i className="fab fa-yarn" id="yarn"></i>
        Yummy
      </h1>
      <SlideImage />
      <Carousel foods={props.homeData} />
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    homeData: state.home,
  };
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    getAllFoodRequest: () => {
      dispatch(actionGetFoodRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
