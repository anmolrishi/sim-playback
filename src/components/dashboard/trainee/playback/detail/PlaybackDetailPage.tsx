import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Container, Typography } from '@mui/material';
import Layout from '../../../../layout/Layout';
import DashboardContent from '../../../DashboardContent';
import PlaybackHeader from './PlaybackHeader';
import PlaybackChat from './PlaybackChat';
import PlaybackDetails from './PlaybackDetails';
import PlaybackControls from './PlaybackControls';

const PlaybackDetailPage = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(true);

  return (
    <Layout>
      <DashboardContent>
        <Container>
          <Stack spacing={4} sx={{ py: 4 }}>
            <PlaybackHeader 
              showDetails={showDetails} 
              onToggleDetails={() => setShowDetails(!showDetails)} 
            />
            <Stack direction="row" spacing={2}>
              <Stack spacing={2} sx={{ flex: 1 }}>                
                <PlaybackChat />
                <PlaybackControls />
              </Stack>
              {showDetails && (
                <Box sx={{ flex: 2 }}> {/* Increased width */}
                  <PlaybackDetails />
                </Box>
              )}
            </Stack>
          </Stack>
        </Container>
      </DashboardContent>
    </Layout>
  );
};

export default PlaybackDetailPage;