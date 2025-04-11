import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import JobHuntingForm from './components/JobHuntingForm';
import TaskManager from './components/TaskManager';
import EmailAssistant from './components/EmailAssistant';
import JobResults from './components/JobResults';
import DashboardHome from './components/DashboardHome';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route index element={<DashboardHome />} /> */}
        <Route path="job-hunting/setup" element={<JobHuntingForm />} />
        <Route path="job-hunting/matches" element={<JobResults />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/email-assistant" element={<EmailAssistant />} />
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
