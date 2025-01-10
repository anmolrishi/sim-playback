import React from 'react';
import { Stack, Container } from '@mui/material';
import { useAuth } from '../../../context/AuthContext';
import Layout from '../../layout/Layout';
import DashboardContent from '../DashboardContent';
import WelcomeBanner from './WelcomeBanner';
import StatsGrid from './StatsGrid';
import TrainingPlanTable from './TrainingPlanTable';

const TraineeDashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <DashboardContent>
        <Container>
          <Stack spacing={4} sx={{ py: 4 }}>
            <WelcomeBanner userName={user?.name || ''} />
            <StatsGrid />
            <TrainingPlanTable />
          </Stack>
        </Container>
      </DashboardContent>
    </Layout>
  );
};

export default TraineeDashboard;