import Layout from '../components/layout/Layout';
import FileLoader from '../components/fileLoader/FileLoader';
import Title from '../components/title/Title';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

import { toast } from 'react-toastify';
const Actions = (props) => {
  const { onCancel, onSuccess } = props;
  return (
    <div className='actions__ctn'>
      <Button variant='outline-danger' onClick={onCancel}>
        Cancelar
      </Button>
      <Button variant='outline-secondary' onClick={onSuccess}>
        Guardar
      </Button>
    </div>
  );
};

const CargarArchivo = (props) => {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveFile = async () => {
    const formdata = new FormData();
    formdata.append('csv', files);
    setError(false);
    setSuccess(false);
    setLoading(true);
    try {
      const response = await fetch(
        'http://' + process.env.API_HOST + '/schedule',
        {
          method: 'POST',
          headers: {},
          body: formdata,
        }
      );
      setSuccess(true);
      setLoading(false);
      setFiles(null);
      toast.success('Archivo csv cargado correctamente');
    } catch (error) {
      setError(true);
      setLoading(false);
      toast.error('Error al subir el archvio csv');
    }
  };
  return (
    <Layout>
      <Title>Cargar archivo CSV</Title>

      {loading ? (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Cargando horarios...</span>
        </Spinner>
      ) : (
        <FileLoader files={files} setFiles={setFiles}></FileLoader>
      )}

      {files ? (
        <Actions
          onCancel={() => {
            setFiles([]);
          }}
          onSuccess={saveFile}
        ></Actions>
      ) : null}
    </Layout>
  );
};

export default CargarArchivo;
