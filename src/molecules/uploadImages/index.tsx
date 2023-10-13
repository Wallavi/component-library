import React from "react";
import { Accept, useDropzone } from "react-dropzone";

import Box from "@mui/material/Box";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Typography } from "@mui/material";

import resizeFile from "../../_helpers/resizeImage";
import { v4 as uuidv4 } from "uuid";

interface UploadImagesProps {
  handleDropImage: (files: Array<any>) => void;
}

const UploadImages = ({ handleDropImage }: UploadImagesProps) => {
  const onDrop = async (droppedFiles: Array<any>) => {
    let files = [];

    for (let i = 0; i < droppedFiles.length; i++) {
      const image = await resizeFile(droppedFiles[i]);
      files.push({
        base64: image,
        contentType: "image/jpeg",
        name: uuidv4() + ".jpeg",
        path: droppedFiles[i].path,
        size: droppedFiles[i].size,
      });
    }
    handleDropImage(files);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg,image/png" as unknown as Accept,
    noKeyboard: true,
    maxSize: 20971520,
    multiple: true,
    onDrop,
  });

  return (
    <Box>
      <Box
        sx={{
          height: "125px",
          minWidth: "483px",
          borderColor: (theme) => theme.palette.grey[800],
          border: "1px",
          borderStyle: "dashed",
          borderRadius: 1,
        }}
      >
        <Box
          {...getRootProps()}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 0",
          }}
        >
          <input {...getInputProps()} />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              gap: "20px",
            }}
          >
            <FileUploadIcon />
            <Box>
              <Typography>Click para subir o arrastra la imagen</Typography>
              <Typography>(JPG, PNG de máximo 3 MB)</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadImages;
