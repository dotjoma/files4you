import React from 'react';
import { Box, Button, Container, Grid, Typography, Stack, AppBar, Toolbar, Menu, MenuItem } from '@mui/material';
import { CloudUpload, Lock, Share, Folder, ArrowDropDown } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    navigate('/login');
  }

  const handleSignUp = () => {
    navigate('/register');
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      {/* Modern App Bar */}
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          bgcolor: 'white',
          color: 'text.primary',
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Files 4 You
            </Typography>
            
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Home</Button>
              
              <Button 
                color="inherit"
                endIcon={<ArrowDropDown />}
                onClick={handleClick}
              >
                Features
              </Button>
              
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <CloudUpload sx={{ mr: 1 }} />
                  File Upload
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Lock sx={{ mr: 1 }} />
                  Security
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Share sx={{ mr: 1 }} />
                  Sharing
                </MenuItem>
              </Menu>
            </Stack>
            
            <Box sx={{ ml: 3 }}>
              <Button 
                variant="contained" 
                size="medium"
                sx={{ 
                  borderRadius: '8px',
                  boxShadow: 'none',
                  textTransform: 'none',
                  px: 3,
                  py: 1
                }}
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ lineHeight: 1.2 }}>
          Secure File Storage <br />Made Simple
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
          Store, organize, and share your files with confidence. Perfect for individuals and teams.
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          Get Started
        </Button>
      </Container>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Easy Upload</Typography>
                <Typography variant="body1" color="text.secondary">
                  Drag and drop files or select from your device
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Lock sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Bank-Level Security</Typography>
                <Typography variant="body1" color="text.secondary">
                  AES-256 encryption for all your files
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Share sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Share Instantly</Typography>
                <Typography variant="body1" color="text.secondary">
                  Send files with customizable permissions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Folder sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Organize</Typography>
                <Typography variant="body1" color="text.secondary">
                  Create folders and tag files for easy access
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Simplify Your File Storage?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Join thousands of happy users today
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
          onClick={handleSignUp}
        >
          Create Free Account
        </Button>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 4, borderTop: '1px solid #e5e7eb', bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Files 4 You. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;