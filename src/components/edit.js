/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { Checkbox, Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router, Routes, Route, Link,
  useNavigate,
} from 'react-router-dom';

function Edit(props) {
  const {
    // eslint-disable-next-line react/prop-types
    rows, data1, setRows, setData1, id,
  } = props;

  const navigate = useNavigate();

  // eslint-disable-next-line eqeqeq
  if (id == undefined) {
    navigate('/');
  }

  const [data, setData] = useState({
    id,
    name: null,
    email: null,
    role: null,
  });
  console.log('data', data);

  const handlechange = (e) => {
    if (data.name != null && data.email != null && data.role != null) {
      // eslint-disable-next-line react/prop-types
      const newdata = rows.map((val) => {
        if (val.id === id) {
          return data;
        }
        return val;
      });
      console.log(newdata);
      setRows(newdata);
      setData1(newdata);
      navigate('/');
    } else if (data.name == null) {
      // eslint-disable-next-line no-alert
      alert('please enter a name');
    } else if (data.email == null) {
      // eslint-disable-next-line no-alert
      alert('please enter an email');
    } else {
      // eslint-disable-next-line no-alert
      alert('please enter a role');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h5" align="center">
        Edit User
      </Typography>

      <TextField
        variant="outlined"
        label="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        sx={{ width: '100%', marginY: '10px' }}
      />
      <TextField
        variant="outlined"
        label="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        sx={{ width: '100%', marginY: '10px' }}
      />
      <TextField
        variant="outlined"
        label="role"
        value={data.role}
        onChange={(e) => setData({ ...data, role: e.target.value })}
        sx={{ width: '100%', marginY: '10px' }}
      />

      <Button variant="contained" color="secondary" fullWidth onClick={handlechange}>Submit</Button>
      <Link to="/">
        <Button sx={{ width: '200px', marginLeft: 'auto', display: 'block' }}>back to home page</Button>
      </Link>
    </Container>
  );
}

export default Edit;
