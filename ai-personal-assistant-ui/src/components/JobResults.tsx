import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiBriefcase, 
  FiMapPin, 
  FiDollarSign, 
  FiClock, 
  FiCheck, 
  FiSend,
  FiBookmark,
  FiStar,
  FiChevronLeft,
  FiExternalLink,
  FiSearch
} from 'react-icons/fi';
import { Job } from '../types';

const JobResults = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationComplete, setApplicationComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Simulate API fetch
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockJobs: Job[] = [
        {
          id: 1,
          title: 'Senior React Developer',
          company: 'TechInnovate',
          location: 'Remote',
          salary: '$110,000 - $140,000',
          type: 'Full-time',
          matchScore: 92,
          description: 'We need an experienced React developer to lead our frontend team. You will work with modern technologies like TypeScript, Next.js, and GraphQL.',
          requirements: [
            '5+ years of React experience',
            'Strong TypeScript skills',
            'Experience with state management (Redux/MobX)',
            'Familiarity with testing frameworks'
          ],
          applied: false,
          saved: false,
          posted: '2 days ago',
          isFeatured: true
        },
        {
          id: 2,
          title: 'UX Engineer',
          company: 'DesignCo',
          location: 'San Francisco, CA',
          salary: '$95,000 - $120,000',
          type: 'Full-time',
          matchScore: 87,
          description: 'Looking for a UX engineer with React experience to bridge design and development. You\'ll create design systems and implement UI components.',
          requirements: [
            '3+ years of UX/UI experience',
            'React/TypeScript proficiency',
            'Figma/Sketch expertise',
            'CSS-in-JS experience'
          ],
          applied: false,
          saved: true,
          posted: '1 week ago',
          isFeatured: false
        },
        {
          id: 3,
          title: 'Backend Engineer (Node.js)',
          company: 'DataSystems',
          location: 'Remote',
          salary: '$120,000 - $160,000',
          type: 'Contract',
          matchScore: 78,
          description: 'Seeking a backend engineer to develop our API services and database architecture. Microservices experience preferred.',
          requirements: [
            'Node.js/TypeScript expertise',
            'AWS/GCP experience',
            'Database design skills',
            'CI/CD knowledge'
          ],
          applied: true,
          saved: false,
          posted: '3 days ago',
          isFeatured: true
        }
      ];
      
      setJobs(mockJobs);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  const handleApply = async (job: Job) => {
    setSelectedJob(job);
    setIsApplying(true);
    
    // Simulate application process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setJobs(jobs.map(j => j.id === job.id ? { ...j, applied: true } : j));
    setIsApplying(false);
    setApplicationComplete(true);
  };

  const toggleSaveJob = (id: number) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, saved: !job.saved } : job
    ));
  };

  const filteredJobs = jobs.filter(job => {
    // Filter by status
    const statusMatch = 
      filter === 'all' || 
      (filter === 'applied' && job.applied) || 
      (filter === 'saved' && job.saved);
    
    // Filter by search term
    const searchMatch = 
      searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    return statusMatch && searchMatch;
  });

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with back button */}
      <div className="mb-6 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FiChevronLeft className="mr-1" /> Back
        </button>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main title */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Job Matches</h1>
        <p className="text-gray-600 mt-1">
          {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} found
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['all', 'saved', 'applied'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                filter === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'all' ? 'All Jobs' : tab === 'saved' ? 'Saved' : 'Applied'}
            </button>
          ))}
        </nav>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Job List */}
        <div className="lg:w-1/2 space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className={`bg-white p-5 rounded-xl shadow-sm border ${
                  selectedJob?.id === job.id 
                    ? 'border-blue-300 ring-2 ring-blue-100' 
                    : 'border-gray-100'
                } hover:shadow-md transition-all cursor-pointer relative`}
                onClick={() => {
                  setSelectedJob(job);
                  setApplicationComplete(false);
                }}
              >
                {job.isFeatured && (
                  <div className="absolute top-2 right-2 flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    <FiStar className="mr-1" /> Featured
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    job.matchScore > 85 ? 'bg-green-100 text-green-800' :
                    job.matchScore > 70 ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {job.matchScore}% Match
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-3">
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <FiMapPin className="mr-1.5 w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <FiDollarSign className="mr-1.5 w-4 h-4" />
                    {job.salary}
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <FiClock className="mr-1.5 w-4 h-4" />
                    {job.type}
                  </span>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Posted {job.posted}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveJob(job.id);
                      }}
                      className={`p-2 rounded-lg ${
                        job.saved ? 'text-yellow-500 bg-yellow-50' : 'text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      <FiBookmark className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!job.applied) handleApply(job);
                      }}
                      disabled={job.applied || isApplying}
                      className={`px-4 py-2 rounded-lg font-medium text-sm ${
                        job.applied
                          ? 'bg-green-100 text-green-800 cursor-default'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      } flex items-center justify-center min-w-[100px]`}
                    >
                      {job.applied ? (
                        <>
                          <FiCheck className="mr-2 w-4 h-4" />
                          Applied
                        </>
                      ) : isApplying && selectedJob?.id === job.id ? (
                        'Applying...'
                      ) : (
                        <>
                          <FiSend className="mr-2 w-4 h-4" />
                          Apply
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <FiBriefcase className="mx-auto w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
              <p className="text-gray-600 mt-1">
                {searchTerm 
                  ? 'Try adjusting your search query' 
                  : filter === 'saved' 
                    ? 'You haven\'t saved any jobs yet' 
                    : 'No jobs match your current filters'}
              </p>
            </div>
          )}
        </div>

        {/* Job Details */}
        <div className="lg:w-1/2">
          {selectedJob ? (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedJob.title}</h2>
                    <p className="text-gray-600">{selectedJob.company}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedJob.matchScore > 85 ? 'bg-green-100 text-green-800' :
                    selectedJob.matchScore > 70 ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedJob.matchScore}% Match
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {selectedJob.type}
                  </span>
                  {selectedJob.isFeatured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <FiStar className="mr-1" /> Featured
                    </span>
                  )}
                  {selectedJob.applied && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <FiCheck className="mr-1" /> Applied
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <p className="mt-1 text-sm text-gray-900 flex items-center">
                      <FiMapPin className="mr-2 w-4 h-4" />
                      {selectedJob.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Salary Range</h3>
                    <p className="mt-1 text-sm text-gray-900 flex items-center">
                      <FiDollarSign className="mr-2 w-4 h-4" />
                      {selectedJob.salary}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Posted</h3>
                    <p className="mt-1 text-sm text-gray-900 flex items-center">
                      <FiClock className="mr-2 w-4 h-4" />
                      {selectedJob.posted}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Job Type</h3>
                    <p className="mt-1 text-sm text-gray-900 capitalize">
                      {selectedJob.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Job Description</h3>
                  <div className="mt-2 prose prose-sm max-w-none text-gray-600">
                    <p>{selectedJob.description}</p>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Requirements</h3>
                  <ul className="mt-2 space-y-2">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 text-blue-500 mt-0.5 mr-2">•</span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => toggleSaveJob(selectedJob.id)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium flex items-center justify-center ${
                      selectedJob.saved
                        ? 'bg-yellow-50 text-yellow-600 border border-yellow-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FiBookmark className="mr-2" />
                    {selectedJob.saved ? 'Saved' : 'Save Job'}
                  </button>
                  <button
                    onClick={() => handleApply(selectedJob)}
                    disabled={selectedJob.applied || isApplying}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium flex items-center justify-center ${
                      selectedJob.applied
                        ? 'bg-green-100 text-green-800 cursor-default'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {selectedJob.applied ? (
                      <>
                        <FiCheck className="mr-2" /> Applied
                      </>
                    ) : isApplying ? (
                      'Applying...'
                    ) : (
                      <>
                        <FiSend className="mr-2" /> Apply Now
                      </>
                    )}
                  </button>
                </div>

                {applicationComplete && selectedJob.applied && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <FiCheck className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">Application Submitted!</h3>
                        <div className="mt-2 text-sm text-green-700">
                          <p>
                            We've tailored your resume and successfully applied to {selectedJob.company}. 
                            You'll receive a confirmation email shortly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <FiBriefcase className="mx-auto w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Select a job</h3>
              <p className="text-gray-600 mt-1">Click on a job listing to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobResults;