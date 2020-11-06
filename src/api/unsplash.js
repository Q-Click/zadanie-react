import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: "jHgonm-IattLu4jn9SF3GMXPE4zWfGrUvAStSDqi1l0",
  },
});
