import { Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function Profile() {
  const { state } = useLocation();

  var today = new Date();
  var birthDate = new Date(state.dob);
  var age_now = today.getFullYear() - birthDate.getFullYear();
//   console.log(today);
  //   console.log(age_now);

  //   console.log(state);

  let genderData;

  switch (state.gender) {
    case "female":
      genderData = "Ms";
      break;
    case "male":
      genderData = "Mr";
      break;
  }
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "100vh" }}
      spacing={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography variant="h4">Hi</Typography>
        <Typography variant="h4">{genderData}:</Typography>

        <Typography variant="h4"> {state.Name}</Typography>
      </Stack>

      <Typography variant="body1">Your Age is : {age_now}</Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography>Your Hobbies are :</Typography>
        {state ? (
          state.hobbies.map((item) => (
            <Typography variant="body1" key={item.id}>
              {item.hobby},
            </Typography>
          ))
        ) : (
          <Typography>No hobbies</Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default Profile;
