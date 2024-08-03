// app/dashboard/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  createApp,
  listApps,
  registerUser,
  listUsers,
  deleteApp,
} from "../../../src/authwave/fetchers";
import { App, User } from "../../../src/authwave/models";
import keygen from "keygen";
import { FaCircleInfo, FaRegCopy, FaPlus } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copyToClipboard from "../../../utils/copyToClipBoard";

export default function Dashboard() {
  const [apps, setApps] = useState<App[]>([]);
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const router = useRouter();
  const [addUser, setaddUser] = useState(false);
  const [addUserUsername, setaddUserUsername] = useState("");
  const [addUserPassword, setaddUserPassword] = useState("");

  useEffect(() => {
    fetchApps();
  }, []);
  useEffect(() => {
    if (selectedApp) {
      setUsers((prev) => []);
      fetchUsers(selectedApp.id!);
      setaddUser(false);
      setaddUserUsername("");

      setaddUserPassword("");
    }
  }, [selectedApp]);

  const fetchApps = async () => {
    // Implement API call to fetch apps
    // For now, we'll use dummy data
    let token = localStorage.getItem("adminToken");
    const res = await listApps(token!);
    setApps(res);
  };

  const fetchUsers = async (appId: number) => {
    // Implement API call to fetch users for a specific app
    let token = localStorage.getItem("adminToken");
    let users = await listUsers(token!, appId);
    // For now, we'll use dummy data
    setUsers((prev) => users);
  };

  const handleAppClick = (app: App) => {
    setSelectedApp(app);
  };

  const handleCreateApp = async (appName: string) => {
    // Implement API call to create a new app
    // For now, we'll just add it to the local state
    let token = localStorage.getItem("adminToken");
    await createApp(token!, {
      name: appName,
      client_id: keygen.url(keygen.large),
      client_secret: keygen.url(keygen.large),
    });

    setIsModalOpen(false);
    // Re-fetch apps to update the list
    await fetchApps();
  };

  return (
    <div className="min-h-screen ">
      <header className=" shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold ">Authrocket 🚀</h1>
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
                      onClick={() => handleAppClick(app)}
                      className={`cursor-pointer p-2  rounded-md shadow ${
                        selectedApp?.id == app.id ? "border" : ""
                      } `}
                    >
                      <div className="flex flex-row justify-between   ">
                        <div>{app.name}</div>
                        <div
                          onClick={() => {
                            setIsDetailModalOpen(true);
                          }}
                          className="p-[2px]"
                        >
                          {selectedApp?.id == app.id ? (
                            <FaCircleInfo size="20"></FaCircleInfo>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-2/3">
                <h2 className="text-xl font-semibold mb-2">Users</h2>
                {selectedApp ? (
                  <ul className="space-y-2">
                    {users.map((user) => (
                      <li className="p-2 border rounded-md shadow">
                        {user.username}
                      </li>
                    ))}
                    {addUser && (
                      <li className="border p-3">
                        <input
                          type="text"
                          value={addUserUsername}
                          onChange={(e) => {
                            setaddUserUsername(e.target.value);
                          }}
                          placeholder="username"
                          className="flex my-2 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <input
                          value={addUserPassword}
                          onChange={(e) => {
                            setaddUserPassword(e.target.value);
                          }}
                          type="password"
                          placeholder="password"
                          className="flex my-2 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <div className="flex justify-end my-2">
                          <button
                            onClick={async () => {
                                setaddUserUsername("")
                                setaddUserPassword("")
                                setaddUser(false)
                              await registerUser({
                                app: selectedApp.id!,
                                password: addUserPassword,
                                username: addUserUsername,
                              });
                              await fetchUsers(selectedApp.id!);
                            }}
                            className="p-3 bg-black rounded-2xl border"
                          >
                            Save
                          </button>
                        </div>
                      </li>
                    )}
                    <li className="flex justify-center">
                      <button
                        onClick={() => {
                          setaddUser(!addUser);
                        }}
                        className="p-2 bg-black border"
                      >
                        <FaPlus className="inline"></FaPlus> Add User
                      </button>
                    </li>
                  </ul>
                ) : (
                  <p>Select an app to view its users</p>
                )}
                <div></div>
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
      <AppDetailsModal
        {...{
          isOpen: isDetailModalOpen,
          app: selectedApp,
          onClose: () => setIsDetailModalOpen(false),
          onDeleteApp: async () => {
            const token = localStorage.getItem("adminToken");
            console.log("called");
            await deleteApp(token!, selectedApp?.id!);
            setIsDetailModalOpen(false);
            setSelectedApp(null);
            await fetchApps();
          },
        }}
      ></AppDetailsModal>
    </div>
  );
}

interface CreateAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateApp: (appName: string) => void;
}

export function CreateAppModal({
  isOpen,
  onClose,
  onCreateApp,
}: CreateAppModalProps) {
  const [appName, setAppName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateApp(appName);
    setAppName("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black  overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md ">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium ">
            Create New App
          </h3>
          <form className="mt-2  py-3" onSubmit={handleSubmit}>
            <input
              type="text"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              placeholder="App Name"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <div className="items-center py-3">
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
            className=" px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

interface AppDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  app: App | null;
  onDeleteApp: (appId: number) => void;
}

export function AppDetailsModal({
  isOpen,
  onClose,
  app,
  onDeleteApp,
}: AppDetailsModalProps) {
  if (!isOpen || !app) return null;

  const handleDelete = () => {
    if (app.id) {
      onDeleteApp(app.id);
    }
  };

  return (
    <div className="fixed inset-0 bg-black overflow-y-auto h-full w-full">
      <ToastContainer></ToastContainer>
      <div className="relative top-20 mx-auto bg-slate-950 p-5 border  w-96 shadow-lg rounded-md ">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium ">App Details</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm font-medium ">Name: {app.name}</p>
            <p className="text-sm font-medium  m-1">
              Client ID:{" "}
              <span className="bg-black  p-1">
                {" "}
                {app.client_id.length > 16
                  ? app.client_id.substring(0, 16) + "***"
                  : app.client_id}{" "}
                <FaRegCopy
                  onClick={() => {
                    copyToClipboard(app.client_id);
                    toast.info("Coppied to clipbaord", {});
                  }}
                  className="inline"
                />{" "}
              </span>
            </p>
            <p className="text-sm font-medium ">
              Client Secret:{" "}
              <span className="bg-black  p-1">
                {" "}
                {app.client_secret.length > 12
                  ? app.client_secret.substring(0, 12) + "***"
                  : app.client_secret}{" "}
                <FaRegCopy
                  onClick={() => {
                    copyToClipboard(app.client_id);
                    toast.info("Coppied to clipbaord", {});
                  }}
                  className="inline"
                />{" "}
              </span>
            </p>
            <div className="mt-4">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Delete App
              </button>
            </div>
          </div>

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
