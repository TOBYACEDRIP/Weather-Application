import{u as m,j as e}from"./index-C04AcXtT.js";import{M as c}from"./index-gF3hUmX4.js";import{a as n}from"./index-BQZe_xe3.js";import"./iconBase-C9ffjZsO.js";const i="_currentWeather_15ff3_1",o="_card_15ff3_1",l="_wrapper_15ff3_25",r="_wState_15ff3_57",p="_metaList_15ff3_73",d="_metaItem_15ff3_81",a={currentWeather:i,card:o,wrapper:l,wState:r,metaList:p,metaItem:d};function h(){var t;const{currentWeatherData:s}=m();return e.jsx("section",{className:a.currentWeather,"aria-label":"current weather",children:e.jsxs("div",{className:a.card,children:[e.jsx("h2",{className:a.title,children:"Now"}),e.jsxs("div",{className:a.wrapper,children:[e.jsxs("span",{className:a,children:[Math.round((t=s==null?void 0:s.main)==null?void 0:t.temp)||"","°c"]}),e.jsx("img",{src:`https://openweathermap.org/img/wn/${s==null?void 0:s.weather[0].icon}@2x.png`,alt:"Weather icon",className:a.weatherIcon,loading:"lazy"})]}),e.jsx("p",{className:a.wState,children:s==null?void 0:s.weather[0].description}),e.jsxs("ul",{className:a.metaList,children:[e.jsxs("li",{className:a.metaItem,children:[e.jsx(c,{}),e.jsx("p",{className:a.metaText,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),e.jsxs("li",{className:a.metaItem,children:[e.jsx(n,{}),e.jsx("p",{className:a.metaText,children:`${(s==null?void 0:s.name)||""}, ${(s==null?void 0:s.sys.country)||""}`})]})]})]})})}export{h as default};
