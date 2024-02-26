import React, { useEffect, useState } from "react";
import { PlantListApi } from "../API/PlantListApi";
import { plantListExample } from "../../../plant_id_output";

export const FindMatchingPlants = (ScientificName) => {
  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    // Correct method for fetching data from api - commented out so don't use too many api calls. Just using list in plant_id_output for testing purposes

    // const fetchPlantData = async () => {
    //   try {
    //     const plantData = await PlantListApi();
    //     setPlantList(plantData);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchPlantData();
    setPlantList(plantListExample); // for testing purposes, comment out when changing to using API call
  }, []);
  let foundPlant = null;
  for (let i = 0; i < plantList.length; i++) {
    if (
      plantList[i].scientific_name[0]
        .toLowerCase()
        .includes(ScientificName.toLowerCase())
    ) {
      foundPlant = plantList[i];
    }
  }
  return foundPlant;
};
