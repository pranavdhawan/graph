import axios from 'axios';

// const SUBGRAPH_URL = process.env.REACT_APP_SUBGRAPH_URL;
const SUBGRAPH_URL = 'https://api.studio.thegraph.com/query/94172/usdc-transfer-tracker/version/latest'

export const fetchTransfers = async () => {
  const query = `
    {
      transfers(first: 10, orderBy: timestamp, orderDirection: desc, where: { to: "0x3B14562836796E4462cB572c6462ecFEB8783aC5" }) {
        id
        from
        to
        value
        timestamp
      }
    }
  `;

  try {
    const response = await axios.post(SUBGRAPH_URL, { query });
    return response.data.data.transfers;
  } catch (error) {
    console.error("Error fetching transfers:", error);
    return [];
  }
};
