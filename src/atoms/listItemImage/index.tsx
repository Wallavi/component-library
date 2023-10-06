import React, { useState } from "react";
import { useFloating } from "@floating-ui/react-dom";
import ClearIcon from "@mui/icons-material/Clear";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  Stack,
  Typography,
} from "@mui/material";
import theme from "../../../theme";

interface ListItemImgProps {
  primaryText: string;
  secondaryText?: string;
  srcImg: string;
}

const ListItemImage = ({
  primaryText,
  secondaryText,
  srcImg,
}: ListItemImgProps) => {
  const { refs, floatingStyles } = useFloating({
    placement: "top-end",
  });
  const [showPreview, setShowPreview] = useState<boolean>(false);

  return (
    <>
      <ListItem
        sx={{
          border: "1px solid",
          borderColor: (theme) => theme.palette.grey[200],
          borderRadius: 1,
          height: 64,
          padding: [1, 2, 1, 1],
        }}
        secondaryAction={
          <>
            <IconButton
              ref={refs.setReference}
              edge="end"
              aria-label="visibility"
              onClick={() => {
                setShowPreview(true);
              }}
            >
              <VisibilityIcon
                sx={{ color: showPreview ? theme.palette.primary.main : "" }}
              />
            </IconButton>
            <IconButton edge="end" aria-label="clear">
              <ClearIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar
          sx={{
            minWidth: 40,
            marginRight: 1,
          }}
        >
          <Avatar
            sx={{ width: 40, height: 40, borderRadius: 1 }}
            variant="square"
            src={srcImg}
          ></Avatar>
        </ListItemAvatar>
        <Stack
          sx={{ padding: [0.1, 0, 0.1, 0] }}
          direction={"column"}
          justifyContent={"space-between"}
          spacing={1}
        >
          <Typography
            sx={{ fontSize: 14, lineHeight: "17px", margin: 0 }}
            variant="h1"
            color={(theme) => theme.palette.grey[800]}
            paragraph={true}
          >
            {primaryText}
          </Typography>
          <Typography
            sx={{ fontSize: 14, lineHeight: "17px", margin: 0 }}
            variant="h1"
            color={(theme) => theme.palette.grey[500]}
            paragraph={true}
          >
            {secondaryText}
          </Typography>
        </Stack>
        {showPreview && (
          <Box ref={refs.setFloating} style={floatingStyles}>
            <Box>
              <IconButton
                edge="end"
                aria-label="close-preview"
                sx={{
                  position: "absolute",
                  top: "-18px",
                  right: "-5px",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  zIndex: 1,
                  ":hover": { backgroundColor: theme.palette.primary.main },
                }}
                onClick={() => setShowPreview(!showPreview)}
              >
                <ClearIcon />
              </IconButton>
              <Avatar
                sx={{ width: 328, height: 220, borderRadius: 1 }}
                src={srcImg}
                variant="square"
              />
            </Box>
          </Box>
        )}
      </ListItem>
    </>
  );
};

export default ListItemImage;
