'use client';
import { CourseLayout } from '../CourseLayout';

const CssIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M2 3h14.4a2 2 0 0 1 1.6.8L22 9l-4 6.2a2 2 0 0 1-1.6.8H2z"/>
        <path d="m22 9-4.1 4.1"/>
        <path d="m2 9 4.1 4.1"/>
        <path d="M13 15.2V21l-3-3-3 3v-5.8"/>
        <path d="M2 15.2V9"/>
    </svg>
);

const courseContent = {
  title: 'Mastering CSS',
  svgIcon: <CssIcon />,
  description: 'Unlock the full potential of web styling with our comprehensive CSS course. From fundamentals to advanced animations, you will learn how to create beautiful and responsive websites.',
  learningObjectives: [
    'Understand CSS syntax, selectors, and the cascade.',
    'Master the box model, positioning, and layout techniques.',
    'Learn Flexbox and Grid for modern, responsive designs.',
    'Create stunning animations and transitions.',
    'Apply best practices for writing clean and maintainable CSS.',
    'Explore advanced topics like variables and pre-processors.',
  ],
  modules: [
    { title: 'Introduction to CSS', description: 'The basics of CSS and how it works with HTML.' },
    { title: 'Selectors and Specificity', description: 'Targeting elements with precision.' },
    { title: 'The Box Model', description: 'Understanding margins, padding, and borders.' },
    { title: 'Layouts with Flexbox', description: 'Building flexible and responsive layouts.' },
    { title: 'Advanced Grid Systems', description: 'Mastering two-dimensional layouts.' },
    { title: 'Transitions and Animations', description: 'Bringing your web pages to life.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421b4352?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'css code abstract',
};

export default function CssCoursePage() {
  return <CourseLayout {...courseContent} />;
}
