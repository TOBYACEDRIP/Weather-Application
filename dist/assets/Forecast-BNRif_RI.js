import{u as i,j as a}from"./index-C04AcXtT.js";const p="_forecast_192je_1",m="_cardWrapper_192je_13",h="_card_192je_13",j="_label_192je_55",t={forecast:p,cardWrapper:m,card:h,label:j};function f(){const{forecastData:s}=i();let c=[];for(let e=7;e<(s==null?void 0:s.list.length);e+=8){const r=s==null?void 0:s.list[e],n=new Date((r==null?void 0:r.dt)*1e3),o={day:"numeric",month:"long"},l=n.toLocaleDateString("en-US",o),d=new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(n);c.push({formattedDate:l,dayName:d,forecastItem:r})}return a.jsxs("section",{className:t.forecast,"aria-label":"forecast label",children:[a.jsx("h2",{children:" 5 Days Forecast: "}),a.jsx("div",{className:t.cardWrapper,children:c.map(e=>a.jsxs("div",{className:t.card,children:[a.jsx("img",{src:`https://openweathermap.org/img/wn/${e.forecastItem.weather[0].icon}@2x.png`,alt:"img",title:e.forecastItem.weather[0].description,className:"weather-icon",loading:"lazy"}),a.jsxs("span",{children:[parseInt(e.forecastItem.main.temp_max),"°c"]}),a.jsx("p",{className:t.label,children:e.formattedDate}),a.jsx("p",{className:t.label,children:e.dayName})]},e.forecastItem.dt))})]})}export{f as default};