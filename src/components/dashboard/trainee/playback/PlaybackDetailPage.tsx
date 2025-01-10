import React, { useState } from 'react';
import Layout from '../../../layout/Layout';
import DashboardContent from '../../DashboardContent';
import { useParams } from 'react-router-dom';
import PlaybackHeader from './detail/PlaybackHeader';
import PlaybackChat from './detail/PlaybackChat';
import PlaybackDetails from './detail/PlaybackDetails';
import PlaybackControls from './detail/PlaybackControls';

const PlaybackDetailPage = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(true);

  return (
    <Layout>
      <DashboardContent>
        <div className="p-8">
          <PlaybackHeader 
            showDetails={showDetails} 
            onToggleDetails={() => setShowDetails(!showDetails)} 
          />
          <div className="flex gap-4">
            <div className="flex-1 space-y-4">
              <div className="text-center text-sm text-gray-600">
                Ringing...
              </div>
              <PlaybackChat />
              <PlaybackControls />
            </div>
            {showDetails && <PlaybackDetails />}
          </div>
        </div>
      </DashboardContent>
    </Layout>
  );
};

export default PlaybackDetailPage;