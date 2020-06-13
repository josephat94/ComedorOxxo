import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

export const TableData = (props) => {
  const { headers, data } = props;
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    if (data) {
      setKeys(Object.keys(data[0]).filter((key) => key != ''));
    }
  }, []);
  return (
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>#</th>
          {headers.map((header, index) => (
            <th key={header + index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={'row+' + index}>
            <td> {index + 1}</td>
            {keys.map((id, subIndex) => (
              <td key={item[id] + index}>{item[id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableData;
