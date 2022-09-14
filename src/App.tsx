import React from 'react';
import './App.css';
// import App from 'oton_core/App';
import CommonHeader from 'oton_core/components/CommonHeader';
// console.log(App)
// const App = React.lazy(() => import("oton_core"));

declare global {
  interface Window {
    config: any;
  }
}

const staticCdn = 'https://cdn.jsdelivr.net/gh/ArtemZubarev/oton-core-assets@main/images';

function CustomApp() {
  const logoUrl = `${staticCdn}/logo.svg`
  return (
    <div className="CustomApp">
      This app is custom
      {/* <App/> */}
      <CommonHeader/>
    </div>
  );
}

export default CustomApp;
