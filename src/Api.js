import axios from "axios";

const catAPI = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

export const getCats = async () => {
  try {
    const { data } = await catAPI.get("/images/search?limit=9");
    return data;
  } catch (err) {
    console.error(err);
  }
};