// this code returns a 500 internal server error as the image file is not being read in the way the api requires.
//code left here in case we need to refer back to it at a later time

// import axios from "axios";
// import * as FileSystem from "expo-file-system";
// const FormData = require("form-data");

// const PROJECT = "all";
// const API_PRIVATE_KEY = process.env.EXPO_PUBLIC_PLANT_ID_API_KEY;
// const API_URL =
//   "https://my-api.plantnet.org/v2/identify/" +
//   PROJECT +
//   `?api-key=2b101oi43hFt0SrWLvx05xY9O`;

// export const getPlant = (plantPic) => {
//   const IMAGE = plantPic;

//   (async () => {
//     const imageFile = async () => {
//       try {
//         const image = await FileSystem.readAsStringAsync(IMAGE, {
//           encoding: FileSystem.EncodingType.Base64,
//         });
//         return image;
//       } catch (error) {
//         console.log(error, "<<<error");
//       }
//     };
//     let form = new FormData();
//     form.append("images", await imageFile());
//     const headers = { "Content-Type": "multipart/form-data" };

//     console.log(form, "<<form");
//     try {
//       const { status, data } = await axios.post(API_URL, form, {
//         headers: headers,
//       });
//       console.log(form, "<<form2");
//       console.log("status", status); // should be: 200
//       console.log("data", require("util").inspect(data, false, null, true));
//     } catch (error) {
//       console.error("error", error);
//     }
//   })();
// };
