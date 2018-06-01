import React from "react";
import Dropzone from "react-dropzone";

const Drop = ({ onDrop }) => {
  const Preview = props => {
    const { files, text } = props;
    if (files && files.length > 0) {
      const file = files[0];
      return <img style={{ width: "100%" }} src={file.preview} alt="logo" />;
    }
    return <p>{text}</p>;
  };
  const oneMiB = 10000048576;
  let dropzoneRef;
  return (
    <div className="fileDrag">
      <button
        className="addFileBtn "
        raised="true"
        color="accent"
        onClick={() => {
          dropzoneRef.open();
        }}
      >
        {"Parcourir logo..."}
      </button>
      <Dropzone
        onDrop={onDrop}
        maxSize={oneMiB}
        multiple={false}
        ref={node => {
          dropzoneRef = node;
        }}
        className="dragBox"
      >
        {({ isDragActive, isDragReject, acceptedFiles }) => {
          if (isDragReject) {
            return (
              <p>
                Ce type de fichier n'est pas pris en charge (seulement jpg ou
                png)
              </p>
            );
          } else if (isDragActive) {
            return <p>Ce type de fichier est valide</p>;
          }
          return (
            <Preview
              files={acceptedFiles}
              text="Vous pouvez aussi glisser /déposer votre fichier image dans cette zone."
            />
          );
        }}
      </Dropzone>
    </div>
  );
};

export default Drop;
