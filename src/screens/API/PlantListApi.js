import axios from "axios";

export const PlantListApi = () => {
  return (async () => {
    try {
      const response = await axios.get(
        `https://perenual.com/api/species-list?key=sk-caGN65e068ff2e1ef4317&indoor=1`
      );
      console.log("axios");
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  })();
};
