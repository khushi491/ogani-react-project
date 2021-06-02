import axios from "axios";

export function fetchProduct() {
  return axios({
    method: "get",
    url: "data.json",
  });
}
