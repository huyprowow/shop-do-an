
import Navbar from './Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import routers from '../pages/routers';
import '../scss/main.scss';
export const App=()=> {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          {routers.map(({component:Component,path,...rest},i)=>{
            return(
          <Route component={Component} key={i} path={path} {...rest} />
        // render={
        // <React.Suspense fallback={'loading...'}>
        //  </React.Suspense>
        // } 
          )})}     
        </Switch>
      </>
    </BrowserRouter>
  );
}