import axios from "axios";

//use fake api for mini-shop
export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});