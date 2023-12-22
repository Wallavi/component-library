import React from "react";
import { Accept, useDropzone } from "react-dropzone";

import Box from "@mui/material/Box";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Typography } from "@mui/material";

import resizeFile from "../../_helpers/resizeImage";

interface UploadImagesProps {
  handleDropImage: (files: Array<any>) => void;
}

const UploadImages = ({ handleDropImage }: UploadImagesProps) => {
  const onDrop = async (droppedFiles: Array<File>) => {
    let files = [];

    for (let i = 0; i < droppedFiles.length; i++) {
      const image = await resizeFile(droppedFiles[i]);
      const dataImg = droppedFiles[i];
      files.push({
        base64: image,
        type: dataImg.type,
        name: dataImg.name,
        size: dataImg.size,
        lastModified: dataImg.lastModified,
      });
    }
    handleDropImage(files);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg,image/png" as unknown as Accept,
    noKeyboard: true,
    maxSize: 3000000,
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
          cursor: "pointer",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          {...getRootProps()}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%"
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
            <Box
              sx={{
                width: "45px",
                height: "45px",
                backgroundColor: (theme) => theme.palette.grey[200],
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FileUploadIcon />
            </Box>
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
