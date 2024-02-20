import axios from "axios";
import * as FileSystem from "expo-file-system";
import * as FormData from "form-data";

const api = axios.create({
  baseURL: "https://my-api.plantnet.org/v2/identify/",
});

const PROJECT = "all"; // try 'weurope' or 'canada'
const API_PRIVATE_KEY = process.env.EXPO_PUBLIC_PLANT_ID_API_KEY;
const API_URL =
  "https://my-api.plantnet.org/v2/identify/" +
  PROJECT +
  `?api-key=${API_PRIVATE_KEY}`;

export const getPlant = (plantPic) => {
  console.log(plantPic, "plantPic in getPlant");

  const IMAGE = plantPic;

  const imageFile = async () => {
    try {
      const image = await FileSystem.readAsStringAsync(IMAGE, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return image;
    } catch (error) {
      console.log(error, "<<<error");
    }
  };
  console.log(imageFile, "<<<imageFile");
  (async () => {
    let form = new FormData();
    form.append("images", await imageFile());

    console.log(form, "<<form");
    try {
      const { status, data } = await axios.post(
        API_URL + API_PRIVATE_KEY,

        form,
        {
          headers: form.getHeaders(),
        }
      );
      console.log(form, "<<form2");
      console.log("status", status); // should be: 200
      console.log("data", require("util").inspect(data, false, null, true));
    } catch (error) {
      console.error("error", error);
    }
  })();
};
