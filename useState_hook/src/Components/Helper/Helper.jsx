
import axios from "axios";

//let adminUrl = "https://backendapinodejsraju.herokuapp.com/api/";
let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api";

// let adminUrl="https://jsonplaceholder.typicode.com/"
// let frontEndUrl = "https://backendapinodejsraju.herokuapp.com/";
// let adminUrl="http://10.2.0.166:1577/"
// if (process.env?.REACT_APP_ENV === "production") {
//  //adminUrl = "https://backendapinodejsraju.herokuapp.com/api/"; //change when app goes live
//  adminUrl = "https://wtsacademy.dedicateddevelopers.us/api"; //change when app goes live
//   // frontEndUrl = "https://jsonplaceholder.typicode.com/"; //change when app goes live
// }



export const baseURL = adminUrl
// export const course_storagePath = baseURL + "/storage/";
let axiosInstance = axios.create({
  baseURL,
});
export default axiosInstance;