import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';

const FileLoader = (props) => {
  const { files, setFiles } = props;
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setFiles(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className='drag-drop-files__ctn' {...getRootProps()}>
      {files ? (
        <p>{files.name}</p>
      ) : (
        <>
          <input {...getInputProps()} accept='.csv' />
          {isDragActive ? (
            <p>Suelta el archivo para cargarlo....</p>
          ) : (
            <p>Arrastra un archivo csv or da click aqui</p>
          )}
        </>
      )}
    </div>
  );
};

export default FileLoader;
