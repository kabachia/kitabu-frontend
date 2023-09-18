import axios from "axios";

export default axios.create({
  baseURL: "http://75.101.141.141/api/",
  headers: {
    "Content-type": "application/json"
  }
});
