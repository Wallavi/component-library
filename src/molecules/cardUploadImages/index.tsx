import React from "react";
import { Box } from "@mui/material";
import UploadImages from "../uploadImages";
import ListItemImage from "../listItemImage";
import NoImagesUploaded from "../noImagesUploaded";

interface CardUploadImagesProps {
  handleDropImage: (files: Array<any>) => void;
  deleteItem?: (idx: number) => void;
  images: Array<any>;
  customMap?: { primaryText: string; secondaryText?: string };
  disabled?: boolean;
}

const CardUploadImages = ({
  handleDropImage,
  deleteItem,
  images,
  customMap = { primaryText: "name" },
  disabled = false,
}: CardUploadImagesProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
      {disabled ? (
        images.length > 0 ? (
          images.map((img, idx) => (
            <ListItemImage
              key={"imgList" + idx}
              primaryText={img[customMap.primaryText]}
              secondaryText={
                img[customMap.secondaryText ? customMap.secondaryText : ""]
              }
              srcImg={img.base64}
              deleteItem={() => (deleteItem ? deleteItem(idx) : undefined)}
              disabled={disabled}
            />
          ))
        ) : (
          <NoImagesUploaded />
        )
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
};

export default CardUploadImages;
