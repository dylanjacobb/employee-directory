import axios from "axios";

export default {
  // look into the fetch thing with other stuff
  fetchEmployee: function() {
    return axios.get('https://randomuser.me/api/?results=25')
  }
};