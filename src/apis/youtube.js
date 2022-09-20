import axios from "axios";

const KEY = "AIzaSyD5fAtNynpAXan0mO6V4Rfaw9uUuaIdRG8";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: 5,
    key: KEY,
  },
});
