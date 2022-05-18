/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox, Button, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit(props) {
  const { rows, data1, setRows, setData1, id } = props;

  let navigate = useNavigate();

  if(id == undefined){
    navigate("/")
  }

  const [data, setData] = useState({
    id: id,
    name: null,
    email: null,
    role: null,
  });
  console.log("data", data);

  const handlechange = (e) => {
    const newdata = rows.map((val) => {
      if (val.id === id) {
        return data;
      }
      return val;
    });
    console.log(newdata);
    setRows(newdata);
    setData1(newdata);
    navigate("/")
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
        sx={{ width: "100%", marginY: "10px" }}
      />
      <TextField
        variant="outlined"
        label="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        sx={{ width: "100%", marginY: "10px" }}
      />
      <TextField
        variant="outlined"
        label="role"
        value={data.role}
        onChange={(e) => setData({ ...data, role: e.target.value })}
        sx={{ width: "100%", marginY: "10px" }}
      />

      <Button variant="contained" fullWidth={true} onClick={handlechange}>Submit</Button>
      <Link to="/">
      <Button sx={{width: "200px", marginLeft:"auto", display:"block"}}>back to home page</Button>
      </Link>
    </Container>
  );
}

export default Edit;
