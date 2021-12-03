import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useDropzone } from "react-dropzone";
import resizeFile from "../_helpers/resizeImage";
import { v4 as uuidv4 } from "uuid";

const MainContainer = styled.section`
  width: 100%;
  margin: 20px 0;
`;

const Description = styled.p`
  text-align: center;
`;

const dropzoneStyle = {
  flex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  cursor: "pointer",
};

export default function DropImage(props) {
  const onDrop = async (droppedFiles) => {
    let files = [...props.images];

    for (let i = 0; i < droppedFiles.length; i++) {
      const image = await resizeFile(droppedFiles[i]);
      files.push({
        base64: image,
        contentType: "image/jpeg",
        name: uuidv4() + ".jpeg",
        path: droppedFiles[i].path,
      });
    }
    props.handleDropImage(files);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    maxSize: 20971520,
    multiple: true,
    onDrop,
  });

  return (
    <MainContainer>
      <div {...getRootProps({ className: "dropzone", style: dropzoneStyle })}>
        <input {...getInputProps()} />
        <Description>
          Arrastra las imágenes o da click aquí para seleccionarlas.
        </Description>
      </div>
    </MainContainer>
  );
}

DropImage.propTypes = {
  handleDropImage: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

DropImage.defaultProps = {};
