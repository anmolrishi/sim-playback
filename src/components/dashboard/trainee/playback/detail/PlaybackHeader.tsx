import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography, Button } from '@mui/material';

interface PlaybackHeaderProps {
  showDetails: boolean;
  onToggleDetails: () => void;
}

const PlaybackHeader: React.FC<PlaybackHeaderProps> = ({ 
  showDetails, 
  onToggleDetails 
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 4 }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Link 
          to="/playback" 
          style={{ textDecoration: 'none' }}
        >
          <Typography variant="h4" color="text.secondary">
            Playback
          </Typography>
        </Link>
        <Typography variant="h6" color="text.secondary">/</Typography>
        <Typography variant="h6">
          Humana_MS_PCP Change
        </Typography>
      </Stack>
      <Button
        variant="text"
        onClick={onToggleDetails}
        sx={{ color: 'primary.main' }}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </Button>
    </Stack>
  );
};

export default PlaybackHeader;