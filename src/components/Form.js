import {
  Autocomplete,
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const hobbiesData = [
  {
    id: 1,
    hobby: "Dancing",
  },
  {
    id: 2,
    hobby: "Singing",
  },
  {
    id: 3,
    hobby: "Coding",
  },
  {
    id: 4,
    hobby: "HandyCrafts",
  },
];

function Form() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setdob] = useState("");
  const [category, setCategory] = useState([]);

  const Navigate = useNavigate();

  const onSubmit = () => {
    const data = {
      Name: name,
      gender: gender,
      hobbies: category,
      dob: dob,
    };
    // window.localStorage.setItem("persondata", data);
    Navigate("/profile", { state: data });
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "100vh" }}
      component="form"
      spacing={2}
    >
      <Typography variant="h5">Enter your Details</Typography>
      <TextField
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ width: "250px" }}
      />
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      <Autocomplete
        sx={{ width: "250px" }}
        multiple
        limitTags={1}
        value={category}
        onChange={(event, newValue) => {
          setCategory(newValue);
        }}
        id="category-filter"
        options={hobbiesData}
        getOptionLabel={(option) => option.hobby}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} label="Hobbies" />}
      />
      <TextField
        // label="Date of Birth"
        type="date"
        value={dob}
        onChange={(e) => setdob(e.target.value)}
        sx={{ width: "250px" }}
      />
      <Button variant="contained" onClick={onSubmit}>
        Submit
      </Button>
    </Stack>
  );
}

export default Form;
