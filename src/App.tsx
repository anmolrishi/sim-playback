import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoadingSpinner from './components/common/LoadingSpinner';
import ProtectedRoute from './components/common/ProtectedRoute';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

// Lazy load components
const Login = React.lazy(() => import('./components/Login'));
const Register = React.lazy(() => import('./components/Register'));
const TraineeDashboard = React.lazy(() => import('./components/dashboard/trainee/TraineeDashboard'));
const TrainingPlanPage = React.lazy(() => import('./components/dashboard/trainee/TrainingPlanPage'));
const TrainingPlanDetailsPage = React.lazy(() => import('./components/dashboard/trainee/TrainingPlanDetailsPage'));
const PlaybackPage = React.lazy(() => import('./components/dashboard/trainee/PlaybackPage'));
const PlaybackDetailPage = React.lazy(() => import('./components/dashboard/trainee/playback/PlaybackDetailPage'));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/unauthorized" element={
                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <h1 className="text-2xl font-bold text-gray-800">Unauthorized Access</h1>
                </div>
              } />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute allowedRoles={['trainee']}>
                    <TraineeDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/training"
                element={
                  <ProtectedRoute allowedRoles={['trainee']}>
                    <TrainingPlanPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/training/:id"
                element={
                  <ProtectedRoute allowedRoles={['trainee']}>
                    <TrainingPlanDetailsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/playback"
                element={
                  <ProtectedRoute allowedRoles={['trainee']}>
                    <PlaybackPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/playback/:id"
                element={
                  <ProtectedRoute allowedRoles={['trainee']}>
                    <PlaybackDetailPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;