import { useState } from 'react';
import { 
  FiBriefcase, 
  FiCheckCircle, 
  FiMail, 
  FiUser, 
  FiBell, 
  FiSearch, 
  FiSettings,
  FiMenu 
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface Notification {
  id: number;
  text: string;
  time: string;
  read: boolean;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications] = useState<Notification[]>([
    { id: 1, text: 'Your application to Google was viewed', time: '2h ago', read: false },
    { id: 2, text: '3 new jobs match your profile', time: '5h ago', read: true }
  ]);
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600">AL Assistant</h1>
          </div>
          <div className="flex flex-col flex-grow p-4 overflow-y-auto">
            <nav className="flex-1 space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'dashboard' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiUser className="mr-3 w-5 h-5" />
                Dashboard
              </button>
              <button
                onClick={() => {
                  setActiveTab('jobs')
                  navigate('/job-hunting/setup'); // Navigate to the desired page
                }

                }
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'jobs' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiBriefcase className="mr-3 w-5 h-5" />
                Job Hunting
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'tasks' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiCheckCircle className="mr-3 w-5 h-5" />
                Task Manager
              </button>
              <button
                onClick={() => setActiveTab('emails')}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'emails' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiMail className="mr-3 w-5 h-5" />
                Email Assistant
              </button>
            </nav>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg w-full hover:bg-gray-100">
              <FiSettings className="mr-3 w-5 h-5" />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navigation */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <button className="p-2 mr-2 text-gray-500 rounded-md md:hidden hover:bg-gray-100">
              <FiMenu className="w-6 h-6" />
            </button>
            <div className="relative max-w-md w-full md:w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full py-2 pl-10 pr-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:ring-0"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100 relative">
              <FiBell className="w-5 h-5" />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                JD
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700 hidden md:inline">John Doe</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your job search today</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Applications Sent</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <FiBriefcase className="w-6 h-6" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3"><span className="text-green-500 font-medium">+3</span> from last week</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Interviews Scheduled</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
                </div>
                <div className="p-3 rounded-lg bg-green-50 text-green-600">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3"><span className="text-green-500 font-medium">+1</span> from last week</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Unread Messages</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                  <FiMail className="w-6 h-6" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3"><span className="text-red-500 font-medium">+4</span> from yesterday</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Hunting Service */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-50 rounded-lg mr-4">
                  <FiBriefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Job Hunting Service</h2>
              </div>
              <p className="text-gray-600 mb-6">Find your dream job! Get personalized recommendations based on your profile.</p>
              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              onClick={() => navigate('/job-hunting/setup')} // Navigate to the desired page
              >
                Start Job Search
              </button>
            </div>

            {/* Task Manager */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-50 rounded-lg mr-4">
                  <FiCheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Daily Management</h2>
              </div>
              <p className="text-gray-600 mb-6">Manage your tasks and track your progress. Stay organized daily.</p>
              <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium">
                View Tasks
              </button>
            </div>

            {/* Email Assistant */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-50 rounded-lg mr-4">
                  <FiMail className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Smart Communication</h2>
              </div>
              <p className="text-gray-600 mb-6">Automate your emails and stay on top of important conversations.</p>
              <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium">
                Manage Emails
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <div key={notification.id} className={`px-6 py-4 ${!notification.read ? 'bg-blue-50' : ''}`}>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 h-2 w-2 mt-2 rounded-full ${!notification.read ? 'bg-blue-500' : 'bg-transparent'}`}></div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm text-gray-800">{notification.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-gray-200 text-center">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View all activity
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;