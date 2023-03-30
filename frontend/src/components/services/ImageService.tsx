import axios from "axios";
let apiUrl : any = "http://localhost:4000/api/screenShot/"

let getImages = () => {
return axios.get(`${apiUrl}files`)
}
export {getImages}