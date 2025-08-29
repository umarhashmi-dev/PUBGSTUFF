'use client';
import { CourseLayout } from '../CourseLayout';

const courseContent = {
  title: 'Monetizing AI Skills',
  svgIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 1v22"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        <path d="M12 12.5a2.5 2.5 0 0 0-2.5-2.5 2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 0 5 0"/>
        <path d="M12 12.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 1-5 0"/>
    </svg>
  ),
  description: 'Learn how to turn your AI knowledge into a profitable venture. This course covers freelancing, building AI-powered SaaS products, consulting, and creating content to monetize your expertise.',
  learningObjectives: [
    'Identify profitable niches in the AI industry.',
    'Price your AI services and products effectively.',
    'Find clients and projects as an AI freelancer.',
    'Develop and launch a simple AI-powered SaaS application.',
    'Build a personal brand as an AI expert.',
    'Create and sell AI-related digital products or courses.',
  ],
  modules: [
    { title: 'The AI Gold Rush', description: 'Opportunities for monetization in the AI space.' },
    { title: 'AI Freelancing and Consulting', description: 'Selling your skills to businesses.' },
    { title: 'Building and Selling AI SaaS', description: 'From idea to recurring revenue.' },
    { title: 'Creating AI-Powered Content', description: 'Monetizing your knowledge through content.' },
    { title: 'Marketing for AI Ventures', description: 'How to attract customers and clients.' },
    { title: 'Ethical Considerations', description: 'Building a sustainable and responsible AI business.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1696203435223-9524020a9a23?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'ai business money',
};

export default function AiMoneyCoursePage() {
  return <CourseLayout {...courseContent} />;
}
