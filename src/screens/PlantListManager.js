import { useEffect, useState } from "react";
import axios from "axios";

//when signed up, will go to this page. still to be implemented - awaiting merge of sign-up ticket

export const PlantListManager = () => {
  const [plantList, setPlantList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://perenual.com/api/species-list?key=${process.env.EXPO_PUBLIC_PERENUAL_APIKEY}&indoor=1`
        );
        setPlantList(response.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  //will send this info to Homepage
  // return (
  //   <Homepage plantList={plantList} setPlantList={setPlantList}/>
  // )
};
