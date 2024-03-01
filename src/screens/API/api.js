import * as FileSystem from "expo-file-system";

// Plant.id API

export const getPlant = async (plantPic) => {
  const apiKey = "[YOUR-API-KEY]";

  try {
    const fileContent = await FileSystem.readAsStringAsync(plantPic, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const data = {
      api_key: apiKey,
      images: [fileContent],
      modifiers: ["similar_images"],
      plant_details: ["common_names"],
    };

    const response = await fetch("https://api.plant.id/v2/identify", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    // console.log("Plant:", responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
