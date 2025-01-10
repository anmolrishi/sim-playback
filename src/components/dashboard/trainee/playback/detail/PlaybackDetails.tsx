import React from 'react';
import { 
  Stack, 
  Card, 
  IconButton, 
  Typography, 
  Divider,
  Button,
  Chip,
  Grid,
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SimIcon from '@mui/icons-material/Assessment';
import TimerIcon from '@mui/icons-material/Timer';

const PlaybackDetails = () => {
  return (
    <Card sx={{ width: 320, p: 2, borderRadius: 2 }}>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="h6">Simulation Details</Typography>
            <IconButton size="small">
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>

          <Stack 
            spacing={0} 
            sx={{ 
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              overflow: 'hidden'
            }}
          >
            {/* Headers */}
            <Grid container sx={{ p: 1.5,
                                 bgcolor: '#F9FAFB'}}>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  Sim Name & ID
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  Completion Date
                </Typography>
              </Grid>
            </Grid>

            <Divider />

            {/* Data Row */}
            <Box>
              <Grid container sx={{ p: 1.5 }}>
                <Grid item xs={6}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2">Humana_MS_PCP Change</Typography>
                    <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>82840</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2">Dec 20, 2024</Typography>
                    <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>12:13pm IST</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            <Divider />

            {/* Second Headers */}
            <Grid 
              container 
              sx={{ 
                p: 1.5,
                bgcolor: '#F9FAFB'
              }}
            >
              <Grid item xs={6}>
                <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  Sim Type
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  Attempt Type
                </Typography>
              </Grid>
            </Grid>

            <Divider />

            {/* Second Data Row */}
            <Box>
              <Grid container sx={{ p: 1.5 }}>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip
                      label="Visual-Audio"
                      size="small"
                      sx={{ 
                        bgcolor: 'grey.200',
                        height: 24,
                        '& .MuiChip-label': {
                          px: 1,
                          fontSize: '14px'
                        }
                      }}
                    />                    
                    <Chip
                      label="Lvl 02"
                      size="small"
                      sx={{ 
                        bgcolor: 'grey.200',
                        height: 24,
                        '& .MuiChip-label': {
                          px: 1,
                          fontSize: '14px'
                        }
                      }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Chip
                    label="Test"
                    size="small"
                    sx={{ 
                      bgcolor: 'grey.200',
                      height: 24,
                      '& .MuiChip-label': {
                        px: 1,
                        fontSize: '14px'
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Stack>

        <Divider />

        <Stack spacing={2}>
          <Typography variant="h6">Score Details</Typography>
          
          <Stack direction="row" spacing={4}>
    <Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <SimIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
        <Typography sx={{ fontSize: '12px', color: 'text.secondary' }} gutterBottom>
          Sim Score
        </Typography>
      </Stack>
      <Typography variant="h5" color="success.main" sx={{ mt: 1 }}>86%</Typography>
    </Stack>
    <Stack>             
      <Stack direction="row" spacing={1} alignItems="center">
        <TimerIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
        <Typography sx={{ fontSize: '12px', color: 'text.secondary' }} gutterBottom>
          Completion Time
        </Typography>
      </Stack>
      <Typography variant="h5" sx={{ mt: 1 }}>26m 54s</Typography>
    </Stack>
  </Stack>

          <Stack>
            
          </Stack>

          <Stack direction="row" spacing={2}>
            <Stack>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Click Score
              </Typography>
              <Typography variant="h6">62/70</Typography>
            </Stack>
            <Stack>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Keyword Score
              </Typography>
              <Typography variant="h6">4/12</Typography>
            </Stack>
          </Stack>

        <Stack direction="row" spacing={2}>
          <Stack>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Text Field Keyword Score
            </Typography>
            <Typography variant="h6">62/70</Typography>
          </Stack>
           <Stack>
              <Typography sx={{ fontSize: '12px', color: 'text.secondary' }} gutterBottom>
                Sim Accuracy Score
              </Typography>
              <Typography variant="h5">72%</Typography>
           </Stack>
         </Stack>
        
          <Stack direction="row" spacing={2}>
            <Stack>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Confidence
              </Typography>
              <Typography variant="h6">High</Typography>
              <Button
                variant="text"
                sx={{ color: 'primary.main', p: 0, minWidth: 'auto' }}
              >
                View Insight
              </Button>
            </Stack>
            <Stack>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Concentration
              </Typography>
              <Typography variant="h6">High</Typography>
              <Button
                variant="text"
                sx={{ color: 'primary.main', p: 0, minWidth: 'auto' }}
              >
                View Insight
              </Button>
            </Stack>
          </Stack>

          <Stack>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Energy
            </Typography>
            <Typography variant="h6">High</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default PlaybackDetails;