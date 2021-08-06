// below is the JSX version to return the HTML tags
// import React from "react";
// const pi = 3.1415962;

// function Disp(){
//   return(<p>{pi}</p>);
// }

// export default Disp;

// below is the JavaScript version

const pi = 3.1415962;

function doublePi() {
  return 2 * pi;
}

function triplePi() {
  return 3 * pi;
}

export default pi;
export { doublePi, triplePi };
