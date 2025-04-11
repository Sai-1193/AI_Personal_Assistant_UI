import { 
    FiBriefcase, 
    FiCheckCircle, 
    FiMail, 
    FiTrendingUp,
    FiCalendar,
    FiBell
  } from 'react-icons/fi';
  
  const DashboardHome = () => {
    const stats = [
      { name: 'Applications Sent', value: 24, change: '+3', changeType: 'positive', icon: FiBriefcase },
      { name: 'Interviews Scheduled', value: 5, change: '+1', changeType: 'positive', icon: FiCheckCircle },
      { name: 'Unread Messages', value: 12, change: '+4', changeType: 'negative', icon: FiMail },
      { name: 'Profile Strength', value: '85%', change: '+5%', changeType: 'positive', icon: FiTrendingUp },
    ];
  
    const upcomingEvents = [
      { id: 1, title: 'Interview with TechCorp', date: 'Today, 2:00 PM', type: 'interview' },
      { id: 2, title: 'Follow up with HR', date: 'Tomorrow, 10:00 AM', type: 'reminder' },
      { id: 3, title: 'Networking Event', date: 'Friday, 6:00 PM', type: 'event' },
    ];
  
    return (
      <div className="space-y-8">
        {/* Welcome Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your job search today</p>
        </div>
  
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <div className="flex items-baseline mt-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <span className={`ml-2 text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    event.type === 'interview' ? 'bg-red-50 text-red-600' :
                    event.type === 'reminder' ? 'bg-blue-50 text-blue-600' :
                    'bg-green-50 text-green-600'
                  }`}>
                    <FiCalendar className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <FiBell className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-3 border-t border-gray-200 text-center">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all events
            </button>
          </div>
        </div>
  
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg mr-4">
                <FiBriefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Continue Job Search</h2>
            </div>
            <p className="text-gray-600 mb-4">Pick up where you left off in your job hunting process.</p>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm">
              View Jobs
            </button>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-50 rounded-lg mr-4">
                <FiCheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Prepare for Interview</h2>
            </div>
            <p className="text-gray-600 mb-4">Practice common interview questions tailored to your field.</p>
            <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium text-sm">
              Start Practice
            </button>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-50 rounded-lg mr-4">
                <FiMail className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Email Templates</h2>
            </div>
            <p className="text-gray-600 mb-4">Access professional email templates for your job search.</p>
            <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium text-sm">
              View Templates
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardHome;