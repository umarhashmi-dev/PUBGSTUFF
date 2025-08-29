'use client';
import { CourseLayout } from '../CourseLayout';

const courseContent = {
  title: 'TikTok Content Creation Mastery',
  svgIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
        <path d="M12 12a4 4 0 1 0-4-4v8a4 4 0 1 0 4-4Z"/>
    </svg>
  ),
  description: 'Learn the secrets to creating viral content on TikTok. This course covers everything from finding trends and shooting engaging videos to mastering the algorithm and growing your audience.',
  learningObjectives: [
    'Understand the TikTok algorithm and how to use it to your advantage.',
    'Identify and capitalize on viral trends.',
    'Master video shooting, editing, and effects within the app.',
    'Develop a content strategy that builds a loyal following.',
    'Collaborate with other creators and brands.',
    'Monetize your TikTok presence effectively.',
  ],
  modules: [
    { title: 'Understanding the TikTok Ecosystem', description: 'Navigating the platform and its culture.' },
    { title: 'Content Strategy and Ideation', description: 'Planning your content for maximum impact.' },
    { title: 'Shooting and Editing Techniques', description: 'Creating high-quality, engaging videos.' },
    { title: 'Growth Hacking the Algorithm', description: 'Tips and tricks to go viral.' },
    { title: 'Building a Community', description: 'Engaging with your audience.' },
    { title: 'Monetization and Brand Deals', description: 'Turning your passion into a career.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'social media phone',
};

export default function TikTokCoursePage() {
  return <CourseLayout {...courseContent} />;
}
