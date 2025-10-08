
// import Home from "./Home"

// function App() {
//   // const [count, setCount] = useState(0)

//   return (

//     <>
//     <h1>This is app component</h1>
//     <Home/>
//     </>
//   )
// }

// export default App


// import { Avatar, Button, Card, Paper, Stack, TextField } from "@mui/material";
// import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
// import {blue, deepOrange, green, grey} from "@mui/material/colours";
// export default function App()
// {
//   return(
//     <>
//     <Paper elevation={3} sx={{
//       bgcolor:grey[100],
//       placeItems : "center",
//       display:"grid",
//       padding:2,
//       margin:2,
//       p:2,
//       minHeight:"90dvh"}}></Paper>
//       <Card sx={{
//         borderColor:green[500],
//         boxShadow:3,

//       }}
//     </>
//   )
// }














// 10-09-2025





/*
import { Avatar, Button, Card, Paper, TextField } from "@mui/material";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import { green, grey } from "@mui/material/colors";

export default function App() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          bgcolor: grey[100],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // center vertically
        }}
      >
        <Card
          sx={{
            width: 350,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar sx={{ bgcolor: green[500], mb: 1 }}>
            <LockOpenSharpIcon />
          </Avatar>

          <TextField
            fullWidth
            label="Admin Username"
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            required
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: green[500], "&:hover": { bgcolor: green[700] } }}
          >
            LOGIN
          </Button>
        </Card>
      </Paper>
    </>
  );
}
*/













// 11-09-2025

/*

import { AppBar, Toolbar, Button, Box } from '@mui/material'
import React from 'react'
// import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { bgBG } from '@mui/material/locale';
import { purple } from '@mui/material/colors';

export default function Bar()
{
  return(
    <>
    <Box sx = {{ backgroundColor: 'green', borderRadius: 20,}}>

    <AppBar position='static' sx={{ bgcolor: purple[500], textAlign: 'center', borderRadius: 3}}>
    
      <Toolbar>
          <LocalHospitalIcon />
          <Button color="inherit"> HOME  </Button>
          <Button color="inherit"> Doctor </Button>
          <Button color="inherit"> Patient </Button>
          <Button color="inherit"> Med Kit</Button>
        </Toolbar>
    </AppBar>

    </Box>
    
    </>
  )
}



*/





import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=faces&fit=crop&h=200&w=200"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
          />
        </div>

        {/* Name and Role */}
        <h2 className="text-xl font-semibold text-center text-gray-800">Vivek Kumar</h2>
        <p className="text-center text-gray-500 mb-4">Student</p>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-medium text-blue-600">Email:</span>{" "}
            vivekkumar@example.com
          </p>
          <p>
            <span className="font-medium text-blue-600">Phone:</span>{" "}
            +91 9876543210
          </p>
          <p>
            <span className="font-medium text-blue-600">Address:</span>{" "}
            Vijayawada, India
          </p>
          <p>
            <span className="font-medium text-blue-600">Date of Joining:</span>{" "}
            16 Sep 2025
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}


