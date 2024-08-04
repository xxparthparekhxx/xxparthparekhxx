import Link from 'next/link';
import {  useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router=useRouter()
  useEffect(() => {
    const token =localStorage.getItem("adminToken")
    if (token != null){
      router.push("/Projects/authwave/dashboard");
    }
  }, []);
  return (
    <div className="min-h-screen bg-black-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Get Started With Authrocket 🚀
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border  py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <Link href="/Projects/authwave/register" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create Admin User
            </Link>
            <Link href="/Projects/authwave/Login" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Login as Admin User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
