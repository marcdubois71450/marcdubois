import React, { Component, Suspense } from 'react';

const BrowserViewApp = React.lazy(() => import('./BrowserViewApp'));
const MobileViewApp = React.lazy(() => import('./MobileViewApp'));

import {BrowserView,MobileView} from "react-device-detect";

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserView>
          <Suspense fallback={<div>Chargement...</div>}>
              <BrowserViewApp />
          </Suspense>
      </BrowserView>
      <MobileView>
          <Suspense fallback={<div>Chargement...</div>}>
              <MobileViewApp />
          </Suspense>
      </MobileView>
      </div>
    );
  }
}
