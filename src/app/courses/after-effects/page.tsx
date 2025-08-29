'use client';
import { CourseLayout } from '../CourseLayout';

const courseContent = {
  title: 'Adobe After Effects for Beginners',
  svgIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full">
        <rect width="256" height="256" fill="none"/>
        <path d="M82.3,196.8,34,58.5h27.2l14.4,42.1a104.9,104.9,0,0,0,4.2,14.9h.5a111.4,111.4,0,0,0,4.2-14.9L99,58.5h27.2L77.9,196.8Z" fill="currentColor"/>
        <path d="M174.3,196.8,126,58.5h27.2l14.4,42.1a104.9,104.9,0,0,0,4.2,14.9h.5a111.4,111.4,0,0,0,4.2-14.9L191,58.5h27.2L169.9,196.8Z" fill="currentColor"/>
    </svg>
  ),
  description: 'Bring your creative ideas to life with Adobe After Effects. This course will teach you the fundamentals of motion graphics and visual effects, from basic animations to complex compositions.',
  learningObjectives: [
    'Navigate the After Effects interface and workflow.',
    'Create animations using keyframes, shapes, and text.',
    'Understand and apply visual effects and presets.',
    'Work with masks, mattes, and compositing techniques.',
    'Learn the basics of 3D space and camera movement.',
    'Render and export your projects for various platforms.',
  ],
  modules: [
    { title: 'Getting Started', description: 'Understanding the workspace and basic tools.' },
    { title: 'Animation Principles', description: 'Bringing motion to life with keyframes.' },
    { title: 'Shape Layers and Text Animation', description: 'Creating dynamic graphic elements.' },
    { title: 'Visual Effects and Compositing', description: 'Adding magic to your videos.' },
    { title: 'Working in 3D Space', description: 'Creating depth and perspective.' },
    { title: 'Rendering and Exporting', description: 'Sharing your work with the world.' },
  ],
  bannerUrl: 'https://images.unsplash.com/photo-1620674156044-52c713b63264?q=80&w=600&h=400&auto=format&fit=crop',
  bannerAiHint: 'abstract motion graphics',
};

export default function AfterEffectsCoursePage() {
  return <CourseLayout {...courseContent} />;
}
