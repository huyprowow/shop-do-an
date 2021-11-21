import {useState} from 'react'
import { connect } from 'react-redux';
import { RootState,AppDispatch } from '../types/store';
// import { i_actionType, i_homeState } from '../types/home';

const HomePage = ({homeData}:any) => {
    const [data, setData] = useState(homeData);
    // console.log(homeData);
    console.log(data);
    return (
        <h1>Home</h1>
    )
}

const mapStateToProps = (state :RootState) =>{
    
    return {
        homeData:state.home
    }
}
const mapdispatchToProps = (dispatch:AppDispatch)=>{
    return {};
}

export default connect(mapStateToProps,mapdispatchToProps)(HomePage);
