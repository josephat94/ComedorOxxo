import TableData from '../components/table/TableData';
import Title from '../components/title/Title';
import Layout from '../components/layout/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const Index = (props) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const headers = ['Nombre', 'Tipo de Alimento', 'Hora', 'Ubicación'];
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const resp = await axios.get(
          'http://' + process.env.API_HOST + '/schedule'
        );
        setData(resp.data.schedule);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError('No hay datos para mostrar, agrega un archivo .csv ');
      }
    })();
  }, []);
  return (
    <Layout>
      <div>
        <Title>Horarios de Comedor </Title>
        {error && <h4>{error}</h4>}
        {loading && (
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Cargando horarios...</span>
          </Spinner>
        )}
        {data && <TableData data={data} headers={headers}></TableData>}
      </div>
    </Layout>
  );
};

export default Index;
