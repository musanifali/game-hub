import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1611fb96ae543b4873bd218e30c419b",
  },
});
