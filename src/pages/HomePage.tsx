import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState, AppDispatch } from "../types/store";
import { i_home_props } from "../types/home";
import { actionGetFoodRequest } from "../actions/home";

import Carousel from "../components/Carousel";
import SlideImage from "../components/SlideImage";
import HomePanel from "../components/HomePanel";
import Advertise from "../components/Advertise";

const HomePage = (props: i_home_props) => {
  // const [data, setData] = useState([]);//k can den vi lay du lieu tren store
  console.log(props);

  useEffect(() => {
    props.getAllFoodRequest();
  }, []);

  return (
    <>
    <div id="home">
      <HomePanel />
      <SlideImage />
      <Advertise />
      <Carousel foods={props.homeData} />
    </div>
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
