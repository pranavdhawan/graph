import React from 'react';

function TransferTable({ transfers }) {
  return (
    <table>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {transfers.map((transfer, index) => (
          <tr key={index}>
            <td>{transfer.from}</td>
            <td>{transfer.to}</td>
            <td>{transfer.value}</td>
            <td>{new Date(transfer.timestamp * 1000).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransferTable;
