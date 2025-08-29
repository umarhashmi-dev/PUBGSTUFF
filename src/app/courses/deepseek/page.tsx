'use client';
import { CourseLayout } from '../CourseLayout';

const DeepseekIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2a10 10 0 1 0 10 10c0-4.42-2.87-8.17-6.84-9.5c-.52-.17-1.16-.17-1.68 0A10 10 0 0 0 12 2Z"/>
        <path d="m10 10 4 4"/>
        <path d="m14 10-4 4"/>
    </svg>
);


const courseContent = {
  title: 'Deepseek: Advanced Search & Analysis',
  svgIcon: <DeepseekIcon />,
  description: 'Master the art of advanced search and data analysis with Deepseek. This course covers powerful query techniques, data extraction, pattern recognition, and leveraging AI for deep insights.',
  learningObjectives: [
    'Construct complex search queries for precise results.',
    'Extract and structure data from unstructured sources.',
    'Use AI-powered tools for sentiment analysis and topic modeling.',
    'Identify trends and patterns in large datasets.',
    'Automate research and data gathering tasks.',
    'Apply your skills to business intelligence and research.',
  ],
  modules: [
    { title: 'The Art of the Query', description: 'Beyond basic keyword searching.' },
    { title: 'Data Extraction Techniques', description: 'Scraping and parsing data from the web.' },
    { title: 'AI-Powered Text Analysis', description: 'Understanding text data at scale.' },
    { title: 'Pattern Recognition', description: 'Finding hidden insights in your data.' },
    { title: 'Automating Research Workflows', description: 'Building tools to gather information.' },
    { title: 'Practical Applications', description: 'Case studies in market research and OSINT.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1586892330835-a131a478544d?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'data analysis abstract',
};

export default function DeepseekCoursePage() {
  return <CourseLayout {...courseContent} />;
}
