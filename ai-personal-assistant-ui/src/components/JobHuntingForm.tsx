// src/pages/JobHuntingForm.tsx
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';


import { useState } from 'react';
import { FiUser, FiBriefcase, FiBook, FiMapPin, FiClock, FiUpload, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const JobHuntingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    resume: null as File | null,
    jobTitle: '',
    experience: '',
    education: 'bachelors',
    major: '',
    location: '',
    jobType: 'fulltime',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to state/API then navigate to next step
    navigate('/job-hunting/matches');
  };
 
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Job Hunting Setup</h1>
        <p className="text-gray-600 mt-2">Help us find your perfect job match</p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume (PDF)
              </label>
              <div className="mt-1 flex items-center">
                <label className="cursor-pointer flex items-center">
                  <span className="px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                    <FiUpload className="mr-2 w-5 h-5" />
                    {formData.resume ? formData.resume.name : 'Choose file'}
                  </span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="sr-only"
                    required
                  />
                </label>
                {formData.resume && (
                  <span className="ml-3 text-sm text-green-600">✓ Ready for analysis</span>
                )}
              </div>
            </div>

            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Desired Job Title
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiBriefcase className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. Frontend Developer"
                  required
                />
              </div>
            </div>

            {/* Experience & Education Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select...</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              {/* Education */}
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Education
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiBook className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Major & Location Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Major */}
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-2">
                  Field of Study
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. Computer Science"
                />
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Location
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Remote, New York, etc."
                  />
                </div>
              </div>
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Job Type Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['fulltime', 'contract', 'internship', 'remote'].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      name="jobType"
                      value={type}
                      checked={formData.jobType === type}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 capitalize">
                      {type === 'fulltime' ? 'Full-time' : type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleSubmit}
              >
                Find My Job Matches
                <FiArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  ); 
};

export default JobHuntingForm;
