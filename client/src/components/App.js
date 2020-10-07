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
import DonationForm from './pages/donation/DonationForm'
import DogList from './pages/dogList/DogList'
import DogDetails from './pages/dogDetails/DogDetails'
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
          <Route path="/" exact render={() => <Index />} />
          <Route path="/dogList" exact render={props => <DogList {...props}/>} />
          <Route path="/dogList/:dog_id" render={props => <DogDetails {...props} />} />
          <Route path="/donation" exact render={() => <Donation />} />
          <Route path="/donation/donationForm" render={() => <DonationForm />} />
          <Route path = "/map"  render= {() => <Maps/>} />

          {/* <Route path ="/signup"  render={() => <SignUp/>} />
          <Route path = "/login"  render= {() => <LogIn/>} />
          <Route path = "/stadistics"  render= {() => <Stadistics/>} />
          <Route path = "/profile"  render = {() => <Profile/>} /> */}

        </Switch>
        <Footer/>
      </>
    );
  }
}

export default App;
