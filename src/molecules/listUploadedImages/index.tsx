import React from "react";
import { Stack } from "@mui/material";
import ListItemImage from "../listItemImage";

interface ItemData {
  primaryText: string;
  secondaryText?: string;
  srcImg: string;
  show?: boolean
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
        item.show !== false ? <ListItemImage
          primaryText={item.primaryText}
          secondaryText={item.secondaryText}
          srcImg={item.srcImg}
          deleteItem={() => deleteItem(idx)}
        /> : null
      ))}
    </Stack>
  );
};

export default ListUploadedImages;
