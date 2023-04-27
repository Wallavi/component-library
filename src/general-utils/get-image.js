import { Base64 } from "js-base64";

export const getImage = (articleImage, width, height) => {
  try {
    const imageLocation = articleImage.location;
    return (
      "https://d954wi4n8olec.cloudfront.net/" +
      Base64.encode(
        JSON.stringify({
          bucket: "wallavi-inventory-storage",
          key: imageLocation,
          edits: {
            resize: {
              width: width,
              height: height,
              fit: "contain",
            },
          },
        })
      )
    );
  } catch (err) {
    return "/addNew.svg";
  }
};
