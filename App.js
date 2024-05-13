/*** Hot Module reloading which automatically refreshes the web page even wihtout reloading the page
  * after making changes in the code
  * file watcher algorithm written in C++ because it is faster
  * this algorihtm it just keep a track of all the files whihc are changing real time and it tells the server reload
  * Image optimization - media are the heaviest things that takes time to load it  in the web browser
  * caching while development - we can observe whihtout having parcel cache we can see the build time highere than the when we have
  * built the porject after having the parcle cache in our porject
  * compression
  * parcel gives us a functionality to enable https on local build(dev)- it wil though error if we use https with the localhost because chrome or browser doesn't trust the lcoahost as secure
  * we should put parcel.cache in gitignore

*/  
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1",{id:"title"}, "Namasthe React");
const heading2 = React.createElement("h2",{id:"title1"}, "Namasthe React");
const container = React.createElement("div",{id:"container"}, [heading1,heading2]);

console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);