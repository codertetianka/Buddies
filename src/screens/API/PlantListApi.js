import axios from "axios";

// Perenuals API

export const PlantListApi = () => {
  return (async () => {
    try {
      const response = await axios.get(
        `https://perenual.com/api/species-list?key=[YOUR-API-KEY]&indoor=1`
      );
      console.log("axios");
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  })();
};
