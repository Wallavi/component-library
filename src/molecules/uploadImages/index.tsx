import Box from "@mui/material/Box";
import React from "react";
import { useDropzone } from "react-dropzone";


const UploadImages = () => {
    const { getRootProps, getInputProps } = useDropzone()

    return (<Box>
        <Box> <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div></Box>
    </Box>);
}

export default UploadImages;