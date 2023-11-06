/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import singleSpaCss from 'single-spa-css';
import singleSpaReact from 'single-spa-react';

import Root from './root.component';

const cssLifecycles = singleSpaCss({
  cssUrls: [],
  webpackExtractedCss: true,
  shouldUnmount: true,
  timeout: 5000,
  createLink(url) {
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = url;
    return linkEl;
  },
});

const reactLifecycles = singleSpaReact({
  React,
  // @ts-ignore
  ReactDOM: ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    console.log(err, info, props);
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  renderType: 'createRoot',
});

export const bootstrap = [
  cssLifecycles.bootstrap,
  reactLifecycles.bootstrap
]

export const mount = [
  // The CSS lifecycles should be before your framework's mount lifecycle,
  // to avoid a Flash of Unstyled Content (FOUC)
  cssLifecycles.mount,
  reactLifecycles.mount
]

export const unmount = [
  // The CSS lifecycles should be after your framework's unmount lifecycle,
  // to avoid a Flash of Unstyled Content (FOUC)
  reactLifecycles.unmount,
  cssLifecycles.unmount
]
