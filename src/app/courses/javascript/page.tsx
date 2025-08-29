'use client';
import { CourseLayout } from '../CourseLayout';

const JavaScriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M10 17a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0v4Z"/>
        <path d="M6 6a2 2 0 1 0-4 0v12a2 2 0 1 0 4 0V6Z"/>
        <path d="M22 14a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0v-4Z"/>
    </svg>
);


const courseContent = {
  title: 'JavaScript: The Advanced Concepts',
  svgIcon: <JavaScriptIcon />,
  description: 'Move beyond the fundamentals and master the core concepts of JavaScript. This course dives deep into closures, promises, async/await, prototypes, and modern ES6+ features.',
  learningObjectives: [
    'Gain a deep understanding of the JavaScript event loop.',
    'Master asynchronous programming with Promises and async/await.',
    'Understand closures, scope, and execution context.',
    'Learn about prototypal inheritance and object-oriented patterns.',
    'Work with modern data structures like Maps and Sets.',
    'Write clean, efficient, and modern JavaScript code.',
  ],
  modules: [
    { title: 'Asynchronous JavaScript', description: 'Callbacks, Promises, and Async/Await.' },
    { title: 'Core Concepts', description: 'Closures, Scope, and Hoisting.' },
    { title: 'Object-Oriented JavaScript', description: 'Prototypes, Classes, and Inheritance.' },
    { title: 'Functional Programming', description: 'Immutability, Pure Functions, and Higher-Order Functions.' },
    { title: 'Modern ES6+ Features', description: 'Destructuring, Spread/Rest, and Modules.' },
    { title: 'JavaScript Engine and Runtime', description: 'How JavaScript works under the hood.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'javascript code abstract',
};

export default function JavaScriptCoursePage() {
  return <CourseLayout {...courseContent} />;
}
