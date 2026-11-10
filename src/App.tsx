import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';
import { HomePage } from './pages/HomePage';

// Route-level code splitting for sub-routes
const ProjectsIndexPage = lazy(() =>
  import('./pages/ProjectsIndexPage').then((module) => ({ default: module.ProjectsIndexPage }))
);
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((module) => ({ default: module.ProjectDetailPage }))
);
const CreativeWorksPage = lazy(() =>
  import('./pages/CreativeWorksPage').then((module) => ({ default: module.CreativeWorksPage }))
);
const ResumePage = lazy(() =>
  import('./pages/ResumePage').then((module) => ({ default: module.ResumePage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);

const RouteLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-xs">
      <div className="w-2 h-2 rounded-full bg-teal-600 animate-ping" />
      <span>Memuat halaman...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <PageWrapper>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsIndexPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/creative" element={<CreativeWorksPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </PageWrapper>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
