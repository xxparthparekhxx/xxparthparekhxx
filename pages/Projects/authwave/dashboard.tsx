

// app/dashboard/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface App {
  id: number;
  name: string;
}

interface User {
  id: number;
  username: string;
}

export default function Dashboard() {
  const [apps, setApps] = useState<App[]>([]);
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch apps when component mounts
    fetchApps();
  }, []);

  const fetchApps = async () => {
    // Implement API call to fetch apps
    // For now, we'll use dummy data
    setApps([
      { id: 1, name: 'App 1' },
      { id: 2, name: 'App 2' },
    ]);
  };

  const fetchUsers = async (appId: number) => {
    // Implement API call to fetch users for a specific app
    // For now, we'll use dummy data
    setUsers([
      { id: 1, username: 'User 1' },
      { id: 2, username: 'User 2' },
    ]);
  };

  const handleAppClick = (app: App) => {
    setSelectedApp(app);
    fetchUsers(app.id);
  };

  const handleCreateApp = async (appName: string) => {
    // Implement API call to create a new app
    // For now, we'll just add it to the local state
    const newApp = { id: apps.length + 1, name: appName };
    setApps([...apps, newApp]);
    setIsModalOpen(false);
    // Re-fetch apps to update the list
    fetchApps();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="mb-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create App
            </button>
            <div className="flex">
              <div className="w-1/3 pr-4">
                <h2 className="text-xl font-semibold mb-2">Apps</h2>
                <ul className="space-y-2">
                  {apps.map((app) => (
                    <li
                      key={app.id}
                      onClick={() => handleAppClick(app)}
                      className="cursor-pointer p-2 bg-white rounded-md shadow hover:bg-gray-50"
                    >
                      {app.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-2/3">
                <h2 className="text-xl font-semibold mb-2">Users</h2>
                {selectedApp ? (
                  <ul className="space-y-2">
                    {users.map((user) => (
                      <li key={user.id} className="p-2 bg-white rounded-md shadow">
                        {user.username}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Select an app to view its users</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <CreateAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateApp={handleCreateApp}
      />
    </div>
  );
}


interface CreateAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateApp: (appName: string) => void;
}

export  function CreateAppModal({ isOpen, onClose, onCreateApp }: CreateAppModalProps) {
  const [appName, setAppName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateApp(appName);
    setAppName('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Create New App</h3>
          <form className="mt-2 px-7 py-3" onSubmit={handleSubmit}>
            <input
              type="text"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              placeholder="App Name"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <div className="items-center px-4 py-3">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Create
              </button>
            </div>
          </form>
          <button
            onClick={onClose}
            className="mt-3 px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}