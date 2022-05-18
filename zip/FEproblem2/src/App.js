/* eslint-disable comma-dangle */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */

import EnhancedTable from './components/table'
import Edit from './components/edit'
import './App.css';

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Checkbox, Button, IconButton } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [id, setId] = useState();
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    axios
      .get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setData1(res.data);
      });
  }, []);

  console.log("data", data)

  return (
    <Container maxWidth='md' sx={{ mt: 5 }}>
      <Typography variant="h3" align="center">Admin UI</Typography>
      <Router>
        <Routes>
          <Route path="/" element={<EnhancedTable rows={data} data1={data1} setRows={setData} setData1={setData1} setId={setId} />} />
          <Route path="/edit" element={<Edit rows={data} data1={data1} setRows={setData} setData1={setData1} id={id} />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
