import axios from "axios";

let getPagination = (start,end) => {
   return axios.get("http://localhost:4000/api/screenShot/data/start/"+ start +"/end/" + end)
}
let getImages = (start,end) => {
   return axios.get("http://localhost:4000/api/screenShot/data/start/"+ start +"/end/" + end)
}
export {getPagination}