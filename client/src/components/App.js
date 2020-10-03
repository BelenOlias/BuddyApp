import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from './pages/Index/Index'
import Navigation from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'
import SignUp from './pages/signUp/SignUp'
import LogIn from './pages/logIn/LogIn'
import Maps from './pages/maps/Maps'
import Stadistics from './pages/stadistics/Stadistics'
import Donation from './pages/donation/Donation'
import DogList from './pages/dogList/DogList'

import Profile from "./pages/profile/Profile"
class App extends Component {


  constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          {/* <Route path="/" exact render={() => <Index />} /> */}
          <Route path ="/dogList" render={() => <DogList/>} />
          {/* <Route path ="/signup"  render={() => <SignUp/>} />
          <Route path = "/login"  render= {() => <LogIn/>} />
          <Route path = "/map"  render= {() => <Maps/>} />
          <Route path = "/stadistics"  render= {() => <Stadistics/>} />
          <Route path = "/donation"  render = {() => <Donation/>} />
          <Route path = "/profile"  render = {() => <Profile/>} /> */}

        </Switch>
        <Footer/>
      </>
    );
  }
}

export default App;
