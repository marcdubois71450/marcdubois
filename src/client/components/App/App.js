import React, { Component } from 'react';
import BrowserViewApp from './BrowserViewApp';
import MobileViewApp from './MobileViewApp';
import {BrowserView,MobileView} from "react-device-detect";

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
