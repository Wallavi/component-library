import React from "react";
import { Stack } from "@mui/material";
import ListItemImage from "molecules/listItemImage";

interface ItemData {
  primaryText: string;
  secondaryText?: string;
  srcImg: string;
}

interface ListUploadedImagesProps {
  listUploaded: Array<ItemData>;
  deleteItem: (idx: number) => void;
}

const ListUploadedImages = ({
  listUploaded,
  deleteItem,
}: ListUploadedImagesProps) => {
  return (
    <Stack spacing={1.25}>
      {listUploaded.map((item: ItemData, idx: number) => (
        <ListItemImage
          primaryText={item.primaryText}
          secondaryText={item.secondaryText}
          srcImg={item.srcImg}
          deleteItem={() => deleteItem(idx)}
        />
      ))}
    </Stack>
  );
};

export default ListUploadedImages;
