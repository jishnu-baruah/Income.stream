import React from 'react';
import { Container, Typography, Button, TextField, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to DeFi Platform
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Experience decentralized finance like never before
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Connect with MetaMask
        </Button>
        <TextField
          fullWidth
          label="MetaMask Wallet Address"
          variant="outlined"
          margin="normal"
          sx={{ mt: 3 }}
        />
        <Typography variant="subtitle2" gutterBottom>
          If you don't have MetaMask installed, download it from metamask.io
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Deploy New Contract
        </Button>
        <TextField
          fullWidth
          label="Receiver Address"
          variant="outlined"
          margin="normal"
          sx={{ mt: 3 }}
        />
        <TextField
          fullWidth
          label="Amount (ETH)"
          variant="outlined"
          margin="normal"
          sx={{ mt: 3 }}
        />
        <TextField
          fullWidth
          label="Duration (seconds)"
          variant="outlined"
          margin="normal"
          sx={{ mt: 3 }}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Confirm Transaction
        </Button>
      </Box>
    </Container>
  );
}

export default App;
