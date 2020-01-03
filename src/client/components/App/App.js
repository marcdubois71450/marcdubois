import React, { Component } from 'react';
import BrowserViewApp from './BrowserViewApp';
import MobileViewApp from './MobileViewApp';
import ReactGA from 'react-ga';
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";
ReactGA.initialize('UA-113502982-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserView>
          <BrowserViewApp />
      </BrowserView>
      <MobileView>
          <MobileViewApp />
      </MobileView>
      </div>
    );
  }
}
