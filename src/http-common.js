import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/school_management/Api",
  headers: {
    "Content-type": "application/json"
  }
});