import React, { useEffect } from 'react';

function Notification({ lastTransferTime }) {
  useEffect(() => {
    if (lastTransferTime) {
      new Notification("New USDC Transfer", {
        body: `A new transfer was detected at ${new Date(lastTransferTime * 1000).toLocaleString()}`,
      });
    }
  }, [lastTransferTime]);

  return null;
}

export default Notification;
