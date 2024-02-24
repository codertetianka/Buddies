import axios from "axios";

export const PlantListApi = () => {
  return (async () => {
    try {
      const response = await axios.get(
        `https://perenual.com/api/species-list?key=sk-pWbQ65d9e515c2ece4343&indoor=1`
      );
      console.log("axios");
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  })();
};
