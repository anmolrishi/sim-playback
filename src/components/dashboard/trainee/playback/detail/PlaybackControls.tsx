import React, { useState } from 'react';
import { Stack, IconButton, Typography, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const PlaybackControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(21);
  const totalDuration = 1614; // 26m 54s in seconds

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Stack
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <PauseIcon size={16} /> : <PlayArrowIcon size={16} />}
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {formatTime(currentTime)} / {formatTime(totalDuration)}
          </Typography>
          <Stack
            sx={{
              flex: 1,
              height: 8,
              bgcolor: 'grey.200',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <Stack
              sx={{
                width: `${(currentTime / totalDuration) * 100}%`,
                height: '100%',
                bgcolor: 'primary.main',
                borderRadius: 4
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default PlaybackControls;