
import React, { useState } from 'react';
import { fetchFromDatabase } from '@/utils/databaseUtils';
import { Button } from '@/components/ui/button';

const TestDatabaseConnection = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const testConnection = async () => {
    setIsLoading(true);
    setStatus(null);
    setResult(null);
    
    try {
      const response = await fetchFromDatabase('test-connection.php');
      setStatus(response.status === 'success' ? 'success' : 'error');
      setResult(response);
    } catch (error) {
      setStatus('error');
      setResult({ error: 'Failed to connect to the database' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-conference-darkgray">Test Database Connection</h3>
      
      <Button 
        onClick={testConnection}
        disabled={isLoading}
        className="bg-conference-yellow hover:bg-amber-400 text-conference-darkgray font-medium"
      >
        {isLoading ? 'Testing...' : 'Test Connection'}
      </Button>
      
      {status && (
        <div className={`mt-4 p-4 rounded ${status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          <p className="font-bold">{status === 'success' ? 'Connection Successful!' : 'Connection Failed'}</p>
          
          {result && (
            <pre className="mt-2 p-3 bg-gray-100 rounded overflow-x-auto text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      )}
      
      <div className="mt-6">
        <h4 className="font-semibold mb-2">To set up your database:</h4>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Log in to your MilesWeb hosting control panel (cPanel or Plesk)</li>
          <li>Create a new MySQL database named <code className="bg-gray-100 px-1 rounded">icbeaimlnit_db</code> (or your preferred name)</li>
          <li>Create a new database user and assign all privileges to this database</li>
          <li>Edit the <code className="bg-gray-100 px-1 rounded">public/api/db_config.php</code> file with your actual credentials</li>
          <li>Upload the PHP files to your web server's public directory</li>
          <li>Click the "Test Connection" button to verify</li>
        </ol>
      </div>
    </div>
  );
};

export default TestDatabaseConnection;
