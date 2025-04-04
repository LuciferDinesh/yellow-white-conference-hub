
import React, { useState } from 'react';
import { fetchFromDatabase } from '@/utils/databaseUtils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle, Database } from 'lucide-react';

const TestDatabaseConnection = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showCredentials, setShowCredentials] = useState(false);
  const [credentials, setCredentials] = useState({
    host: 'localhost',
    name: 'icbeaimlnit_db',
    user: 'icbeaimlnit_user',
    password: '',
  });

  const updateCredential = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [key]: e.target.value
    });
  };

  const testConnection = async () => {
    setIsLoading(true);
    setStatus(null);
    setResult(null);
    
    try {
      const response = await fetchFromDatabase('test-connection.php');
      setStatus(response.status === 'success' ? 'success' : 'error');
      setResult(response);
      
      if (response.status === 'success') {
        toast({
          title: "Connection Successful",
          description: "Successfully connected to the database!",
          variant: "default",
        });
      } else {
        toast({
          title: "Connection Failed",
          description: response.error || "Failed to connect to the database",
          variant: "destructive",
        });
      }
    } catch (error) {
      setStatus('error');
      setResult({ error: 'Failed to connect to the database' });
      toast({
        title: "Connection Failed",
        description: "Could not reach the database server",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateDbConfig = async () => {
    try {
      // This would normally call a server endpoint to update the db_config.php file
      // For now, just show a message with the values that would be updated
      console.log('Would update db_config.php with:', credentials);
      toast({
        title: "Manual Update Required",
        description: "Please update your db_config.php file with these credentials",
        variant: "default",
      });
      setShowCredentials(false);
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Failed to update database configuration",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            <span>Database Connection Test</span>
          </CardTitle>
          <CardDescription>
            Test your connection to the MilesWeb MySQL/MariaDB database
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                onClick={() => setShowCredentials(!showCredentials)}
                variant="outline"
              >
                {showCredentials ? 'Hide Credentials Form' : 'Show Credentials Form'}
              </Button>
              
              <Button 
                onClick={testConnection}
                disabled={isLoading}
                className="bg-conference-yellow hover:bg-amber-400 text-conference-darkgray font-medium"
              >
                {isLoading ? 'Testing...' : 'Test Connection'}
              </Button>
            </div>
            
            {showCredentials && (
              <Card className="border-dashed mt-4">
                <CardHeader>
                  <CardTitle className="text-lg">Database Credentials</CardTitle>
                  <CardDescription>
                    Enter your MilesWeb MySQL database credentials
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="db_host">Database Host</Label>
                        <Input 
                          id="db_host" 
                          value={credentials.host} 
                          onChange={updateCredential('host')}
                          placeholder="localhost"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="db_name">Database Name</Label>
                        <Input 
                          id="db_name" 
                          value={credentials.name}
                          onChange={updateCredential('name')}
                          placeholder="icbeaimlnit_db"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="db_user">Database User</Label>
                        <Input 
                          id="db_user" 
                          value={credentials.user}
                          onChange={updateCredential('user')}
                          placeholder="icbeaimlnit_user"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="db_pass">Database Password</Label>
                        <Input 
                          id="db_pass" 
                          type="password"
                          value={credentials.password}
                          onChange={updateCredential('password')}
                          placeholder="Your secure password"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <p className="text-sm text-gray-500 mb-2">
                      Note: These credentials need to be manually updated in the public/api/db_config.php file.
                    </p>
                    <Button onClick={updateDbConfig} className="w-full bg-conference-yellow text-conference-darkgray">
                      Get Update Instructions
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )}
          </div>
          
          {status && (
            <div className={`p-4 rounded ${status === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center gap-2 font-medium mb-2">
                {status === 'success' ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-700">Connection Successful!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-700">Connection Failed</span>
                  </>
                )}
              </div>
              
              {result && (
                <div className="mt-2">
                  <p className="text-sm font-medium mb-1">Response details:</p>
                  <pre className="p-3 bg-gray-100 rounded overflow-x-auto text-sm whitespace-pre-wrap">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded">
            <h4 className="font-semibold text-amber-800 mb-3">How to set up your database on MilesWeb:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-700">
              <li>Log in to your MilesWeb control panel (cPanel)</li>
              <li>Go to <strong>Databases</strong> section and click on <strong>MySQL Databases</strong></li>
              <li>Create a new database (e.g., <code className="bg-amber-100 px-1 rounded">icbeaimlnit_db</code>)</li>
              <li>Create a new database user with a strong password</li>
              <li>Add the user to the database with <strong>ALL PRIVILEGES</strong></li>
              <li>Import the database schema from <code className="bg-amber-100 px-1 rounded">public/api/database_setup.sql</code> using phpMyAdmin</li>
              <li>Update the <code className="bg-amber-100 px-1 rounded">public/api/db_config.php</code> file with your actual credentials</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestDatabaseConnection;
