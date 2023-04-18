import axios from "axios";

let getPagination = (start,end) => {
   return axios.get("http://localhost:4000/api/screenShot/data/start/"+ start +"/end/" + end)
}
let getImages = () => {
   return axios.get('http://localhost:4000/api/screenShot/scroll?start=0&end=2')
}
export {getPagination,getImages}