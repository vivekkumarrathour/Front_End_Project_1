import React, { useState } from "react";
import { Box, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f8f9fa"
    >
      <Box
        p={4}
        borderRadius={2}
        boxShadow={3}
        bgcolor="white"
        width="320px"
        textAlign="center"
      >
        {/* Lock Icon */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#4caf50"
          color="white"
          borderRadius="50%"
          width="50px"
          height="50px"
          mx="auto"
          mb={2}
        >
          <LockIcon fontSize="large" />
        </Box>

        {/* Username */}
        <TextField
          label="Admin Username"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue="vivek kumar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Password */}
        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          defaultValue="password123"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, bgcolor: "#4caf50", "&:hover": { bgcolor: "#43a047" } }}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
}


export default rahhuram