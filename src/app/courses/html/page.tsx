'use client';
import { CourseLayout } from '../CourseLayout';

const courseContent = {
  title: 'Advanced HTML5',
  svgIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="m18 16 4-2-4-2"/>
        <path d="m6 8-4 2 4 2"/>
        <path d="m14.5 4-5 16"/>
    </svg>
  ),
  description: 'Go beyond the basics and master the full power of HTML5. This course covers semantic markup, accessibility, multimedia integration, and modern APIs to build structured and meaningful web content.',
  learningObjectives: [
    'Write clean, semantic, and accessible HTML.',
    'Integrate audio, video, and interactive elements.',
    'Understand and use the Canvas API for graphics.',
    'Work with modern form controls and validation.',
    'Learn about Web Storage, Geolocation, and other APIs.',
    'Optimize HTML for performance and SEO.',
  ],
  modules: [
    { title: 'Semantic HTML', description: 'Structuring your content for meaning.' },
    { title: 'Multimedia Elements', description: 'Embedding audio and video.' },
    { title: 'Advanced Forms', description: 'Creating interactive and accessible forms.' },
    { title: 'Canvas and SVG', description: 'Drawing graphics on the web.' },
    { title: 'Web APIs', description: 'Using browser APIs like Geolocation and Web Storage.' },
    { title: 'Accessibility (a11y)', description: 'Making your websites usable for everyone.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'html code abstract',
};

export default function HtmlCoursePage() {
  return <CourseLayout {...courseContent} />;
}
