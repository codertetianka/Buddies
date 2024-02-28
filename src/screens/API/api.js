import * as FileSystem from "expo-file-system";

export const getPlant = async (plantPic) => {
  const apiKey = "32gomT4VJ2J42CnVMrvbxDocpFz5dAhN6WTdOJgzKGd6qr1Gv4";

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
