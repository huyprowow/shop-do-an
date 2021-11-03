
import Navbar from './Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import routers from '../pages/routers';
import React from 'react';
// import { Component } from 'react';

export const App=()=> {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    <Switch>
      {routers.map(({component:Component,path,...rest},i)=>{
        return(
      <Route component={Component} key={i} path={path} {...rest} />
    // render={
    //     // <React.Suspense fallback={'loading...'}>
    //     // </React.Suspense>
    // } 
      )})}     
     </Switch>
    </div>
    </BrowserRouter>
  );
}