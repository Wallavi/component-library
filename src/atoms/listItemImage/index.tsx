import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  Popover,
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
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setShowPreview(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowPreview(!showPreview);
  };

  return (
    <Box>
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
              edge="end"
              aria-label="visibility"
              onClick={(e) => handleClick(e)}
              aria-describedby={"visibilityImg"}
              sx={{ position: "relative" }}
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
      </ListItem>
      <Popover
        id={"visibilityImg"}
        open={showPreview}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{ boxShadow: "none", border: "none" }}
        slotProps={{
          paper: { sx: { backgroundColor: "transparent", boxShadow: "none" } },
        }}
      >
        <Box sx={{ width: 348, height: 245 }}>
          <IconButton
            edge="end"
            aria-label="close-preview"
            sx={{
              position: "absolute",
              top: "5px",
              right: "15px",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              zIndex: 1,
              ":hover": { backgroundColor: theme.palette.primary.main },
            }}
            onClick={handleClose}
          >
            <ClearIcon />
          </IconButton>
          <Avatar
            sx={{
              position: "absolute",
              bottom: 0,
              width: 328,
              height: 220,
              borderRadius: 1,
            }}
            src={srcImg}
            variant="square"
          />
        </Box>
      </Popover>
    </Box>
  );
};

export default ListItemImage;
