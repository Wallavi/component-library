import Resizer from "react-image-file-resizer";

export default async function resizeFile(file) {
  const { type } = file;
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      700,
      700,
      type || "JEPG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
}
