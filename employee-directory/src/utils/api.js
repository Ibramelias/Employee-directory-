
import axios from "axios";

const API = {
  getEmployeeData: function () {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  }
}

export default API;







