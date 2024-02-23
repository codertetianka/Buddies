import * as FileSystem from "expo-file-system";

export const getPlant = async (plantPic) => {
  const apiKey = "PIJ8Jn9T8hx41wYCmyuR5ODwYQobg4XUGhLrzZDs231ygYQSeR";

  try {
    const fileContent = await FileSystem.readAsStringAsync(plantPic, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const data = {
      api_key: apiKey,
      images: [fileContent],
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
