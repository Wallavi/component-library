import React from "react";
import { Box } from "@mui/material";
import UploadImages from "molecules/uploadImages";
import ListItemImage from "molecules/listItemImage";

interface CardUploadImagesProps {
  handleDropImage: (files: Array<any>) => void;
  deleteItem?: (idx: number) => void;
  images: Array<any>;
  customMap?: { primaryText: string; secondaryText?: string };
}

const CardUploadImages = ({
  handleDropImage,
  deleteItem,
  images,
  customMap = { primaryText: "name" },
}: CardUploadImagesProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
      <UploadImages handleDropImage={handleDropImage} />
      {images.map((img, idx) => (
        <ListItemImage
          key={"imgList" + idx}
          primaryText={img[customMap.primaryText]}
          secondaryText={
            img[customMap.secondaryText ? customMap.secondaryText : ""]
          }
          srcImg={img.base64}
          deleteItem={() => (deleteItem ? deleteItem(idx) : undefined)}
        />
      ))}
    </Box>
  );
};

export default CardUploadImages;
