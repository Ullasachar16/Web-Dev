import React from 'react';
import ReactDOM from 'react-dom';
import animals from './data';

const [cat,dog] = animals;

const {feedingRequirements: {food,water}}= cat;

console.log(food);

// ReactDOM.render(
//       <table>
//         <tr>
//           <th>Brand</th>
//           <th>Top Speed</th>
//         </tr>
//         <tr>
//           <td>{tesla.model}</td>
//           <td>{teslaTopSpeed}</td>
//           <td>{teslaTopColour}</td>
//         </tr>
//         <tr>
//           <td>{honda.model}</td>
//           <td>{hondaTopSpeed}</td>
//           <td>{hondaTopColour}</td>
//         </tr>
//       </table>,
//       document.getElementById("root")
//     );
    