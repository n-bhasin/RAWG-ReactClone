import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fcab78b5bf804a9dbbcf2c280389d629",
  },
});
