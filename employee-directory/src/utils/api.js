import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";
const US = "&nat=us";

export default {
  getEmlpoyeeData: function() {
    return axios.get(BASEURL + US);
  }
};







