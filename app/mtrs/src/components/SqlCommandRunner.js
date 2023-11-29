import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

function ReportDashboard() {
  const [sqlCommand, setSqlCommand] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setSqlCommand(event.target.value);
  };

  const runCommand = () => {
    axios.post('http://localhost:5000/runsql', { sql: sqlCommand })
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        setResult('Error running SQL command');
      });
  };

  return (
    <div>
      <TextField
        label="SQL Command"
        variant="outlined"
        fullWidth
        value={sqlCommand}
        onChange={handleInputChange}
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" onClick={runCommand}>
        Run Command
      </Button>
      {result && <div>Result: {JSON.stringify(result)}</div>}
    </div>
  );
}

export default ReportDashboard;
