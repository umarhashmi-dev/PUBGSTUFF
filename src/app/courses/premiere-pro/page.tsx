'use client';
import { CourseLayout } from '../CourseLayout';

const courseContent = {
  title: 'Adobe Premiere Pro Fundamentals',
  svgIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full">
        <rect width="256" height="256" fill="none"/>
        <path d="M96,58.5h49.4c18.5,0,32.7,1.8,42.2,5.5s16.7,9.3,21.5,16.8,7.2,16.8,7.2,28.1-2.4,19.9-7.2,27.3-12,13.1-21.5,16.8a67.3,67.3,0,0,1-21,4.5l-2.4.1H123.2v38.9H96Z" fill="currentColor"/>
        <path d="M123.2,85.7v42.9h14.1c11.3,0,19.3-1.6,24.1-4.8s7.2-7.8,7.2-13.8-2.4-10.8-7.2-14.3-12.9-5.2-24.1-5.2Z" fill="#fff"/>
    </svg>
  ),
  description: 'Learn professional video editing with Adobe Premiere Pro. This course covers the entire workflow from importing footage and creating sequences to color correction, audio mixing, and exporting.',
  learningObjectives: [
    'Master the Premiere Pro interface and editing tools.',
    'Organize and manage your media effectively.',
    'Learn cutting, trimming, and sequencing techniques.',
    'Apply transitions, effects, and color correction.',
    'Edit and mix audio like a pro.',
    'Export high-quality video for any platform.',
  ],
  modules: [
    { title: 'Introduction to Premiere Pro', description: 'Navigating the workspace and importing media.' },
    { title: 'The Editing Workflow', description: 'From rough cut to fine cut.' },
    { title: 'Working with Audio', description: 'Mixing sound and adding music.' },
    { title: 'Color Correction and Grading', description: 'Creating a cinematic look.' },
    { title: 'Titles, Graphics, and Effects', description: 'Adding professional polish.' },
    { title: 'Exporting and Sharing', description: 'Delivering your final video.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1578351113881-ae145f665551?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'video editing abstract',
};

export default function PremiereProCoursePage() {
  return <CourseLayout {...courseContent} />;
}
