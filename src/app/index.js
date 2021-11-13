import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from 'pages/home';
import Events from 'pages/events';
import Athletes from 'pages/athletes';
import Athlete from 'pages/athlete';
import News from 'pages/news';
import Gallery from 'pages/gallery';
import About from 'pages/about';
import LiveStream from 'pages/liveStream';
import Shop from 'pages/shop';

import NavBar from 'applets/navbar';
import Footer from 'applets/footer';

const App = () => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/events">
          <Events />
        </Route>

        <Route exact path="/athletes">
          <Athletes />
        </Route>

        <Route exact path="/athletes/:id">
          <Athlete />
        </Route>

        <Route exact path="/news">
          <News />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/live">
          <LiveStream />
        </Route>

        <Route exact path="/shop">
          <Shop />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
