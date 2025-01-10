import React from 'react';
import { Stack, Button, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface WelcomeBannerProps {
  userName: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName }) => {
  return (
    <Stack
      sx={{
        borderRadius: 8,
        background: 'linear-gradient(to right, #0D6878, #31B5CC)',
        p: 4,
        color: 'white',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight="medium">
            Hi {userName}, Welcome to
            <br />
            Humana Telesales - Operations
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Monitor Progress, Sharpen Skills, and Ace
            <br />
            Your Simulations!
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: 'black',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Go to Next Simulation
            </Button>
            <Button
              sx={{
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              My Playbacks
            </Button>
          </Stack>
        </Stack>
        <Box
          component="img"
          src="/banner.svg"
          alt="Dashboard illustration"
          sx={{
            width: 300,
            height: 250,
            objectFit: 'contain',
          }}
        />
      </Stack>
    </Stack>
  );
};

export default WelcomeBanner;