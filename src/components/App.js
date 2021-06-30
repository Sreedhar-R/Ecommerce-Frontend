  
import React, { Component } from "react";
import {Route, Redirect, Switch} from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Banner from './Banner';
import Cardlist from "./Cardlist";
import Footer from './Footer';
import * as datas from './Schema.json';
import '../styles/App.css';

import CardExpand from './CardExpand';
import SignIn from './SignIn';
import Register from './Register';
import Cartlist from './Cartlist';


class App extends Component{
  constructor(){
    super();
    this.state = {

    };
  }


  render(){
    return (
      <React.Fragment> 
        <Header />
        <Switch>
        <Route path='/home' exact component={Cardlist}/>
        <Route path='/products' exact component={Cardlist}/>
        <Route path='/signin' exact component={SignIn}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/cart' exact component={Cartlist}/>
        <Route path='/products/:id' exact component={CardExpand}/>
        <Redirect from='/' exact to='/home' />
        {/* <Redirect to='/error'/> */}
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
 
}

export default App;