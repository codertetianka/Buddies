import React, { useEffect, useState } from "react";
import { PlantListApi } from "../API/PlantListApi";
import { plantListExample } from "../../../plant_id_output";

export const FindMatchingPlants = () => {
  const [plantList, setPlantList] = useState([]);
  const [foundPlant, setFoundPlant] = useState(null);

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

  useEffect(() => {
    const findMatchingPlant = (scientificName) => {
      for (let i = 0; i < plantList.length; i++) {
        if (
          plantList[i].scientific_name[0]
            .toLowerCase()
            .includes(scientificName.toLowerCase())
        ) {
          setFoundPlant(plantList[i]);
          break;
        }
      }
    };
    // findMatchingPlant(scientificName)
  }, []);

  return { foundPlant, findMatchingPlant };
};
