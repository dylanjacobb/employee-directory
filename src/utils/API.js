import axios from "axios";

export default {
  // look into the fetch thing with other stuff
  fetchEmployee: function() {
    return axios.get('https://randomuser.me/api/?results=25')
  }
};

// import React from "react";
// import "./style.css";

// function SearchResults(props) {
//   return (
//     <ul className="list-group search-results">
//       {props.results.map(result => (
//         <li key={result} className="list-group-item">
//           <img alt="Dog" src={result} className="img-fluid" />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default SearchResults;
