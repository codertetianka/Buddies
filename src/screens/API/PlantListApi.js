import axios from "axios";

export const PlantListApi = () => {
    return (async () => {
      try {
        const response = await axios.get(
          // `https://perenual.com/api/species-list?key=sk-EJ5Z65d36b1ad9d734153&indoor=1`
        );
        console.log('axios')
        return response.data.data
      } catch (err) {
        console.log(err);
      }
    })();
};
