'use client';
import { CourseLayout } from '../CourseLayout';

const courseContent = {
  title: 'Generative AI Fundamentals',
  svgIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/>
        <path d="M20 14h2"/>
        <path d="M15 13v2"/>
        <path d="M9 13v2"/>
    </svg>
  ),
  description: 'Dive into the fascinating world of Generative AI. Learn the principles behind large language models (LLMs), diffusion models for image generation, and how to build applications with them.',
  learningObjectives: [
    'Understand the core concepts of generative models.',
    'Learn how LLMs like GPT work.',
    'Explore text generation, summarization, and translation.',
    'Understand image generation with models like DALL-E and Stable Diffusion.',
    'Learn prompt engineering techniques for better results.',
    'Build a simple generative AI application.',
  ],
  modules: [
    { title: 'Introduction to Generative AI', description: 'What is it and why is it important?' },
    { title: 'Large Language Models (LLMs)', description: 'The technology behind ChatGPT.' },
    { title: 'Prompt Engineering', description: 'Getting the most out of AI models.' },
    { title: 'Image Generation Models', description: 'Creating art and images from text.' },
    { title: 'Building with AI APIs', description: 'Integrating generative AI into your projects.' },
    { title: 'The Future of AI', description: 'Exploring the ethics and future trends.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1718303401563-146941b31aa6?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'generative ai abstract',
};

export default function GenAiCoursePage() {
  return <CourseLayout {...courseContent} />;
}
