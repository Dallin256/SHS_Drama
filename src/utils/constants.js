import Api from "./API.js";
import Auth from "./auth.js";

const JSONUrl = "http://localhost:3001/";

const api = new Api(JSONUrl);
const auth = new Auth(JSONUrl);

export { api, JSONUrl, auth };
