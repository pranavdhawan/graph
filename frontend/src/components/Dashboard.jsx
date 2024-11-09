import React, { useState, useEffect } from 'react';
import TransferTable from './TransferTable';
import { fetchTransfers } from '../services/api';
import Notification from './Notification';
import './Dashboard.css';
import Push from 'push.js';


function Dashboard() {
  const [transfers, setTransfers] = useState([]);
  const [lastTransferTime, setLastTransferTime] = useState(null);
  

  useEffect(() => {
    const getTransfers = async () => {
      const data = await fetchTransfers();
      setTransfers(data);
      if (data.length > 0) {
        setLastTransferTime(data[0].timestamp);
        const latestTransfer = data.transfers[0];
        
        Push.create("New USDC Transfer", {
            body: `From: ${latestTransfer.from}, Amount: ${latestTransfer.value}`,
            timeout: 4000,
          });
      
      }
    };

    const interval = setInterval(getTransfers, 60000); // Fetch every minute
    getTransfers();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1>USDC Transfer Tracker</h1>
      <TransferTable transfers={transfers} />
      <Notification lastTransferTime={lastTransferTime} />
    </div>
  );
}

export default Dashboard;
