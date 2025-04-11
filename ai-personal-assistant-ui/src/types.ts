export interface Notification {
    id: number;
    text: string;
    time: string;
    read: boolean;
  }
  
  export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    matchScore: number;
    description: string;
    requirements: string[];
    applied: boolean;
    saved: boolean;
    posted: string;
    isFeatured: boolean;
  }
  
  export interface UserDetails {
    resume: File | null;
    jobTitle: string;
    experience: string;
    education: string;
    major: string;
    location: string;
    jobType: string;
    skills: string[];
  }