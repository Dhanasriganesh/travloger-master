import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SingaporeHero from '@/components/sections/SingaporeHero';
import FloatingActionBar from '@/components/ui/FloatingActionBar';
import { ScrollProgress } from '@/components/ui/ScrollIndicators';

// Dynamically import below-the-fold components for better performance
const CompanyLogos = dynamic(() => import('@/components/sections/CompanyLogos'), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
});

const SingaporeTripOptions = dynamic(() => import('@/components/sections/SingaporeTripOptions'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const UnfilteredReviews = dynamic(() => import('@/components/sections/UnfilteredReviews'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const GroupCTA = dynamic(() => import('@/components/sections/GroupCTA'), {
  loading: () => <div className="h-96 bg-orange-400 animate-pulse" />
});

const Accommodation = dynamic(() => import('@/components/sections/Accommodation'), {
  loading: () => <div className="h-screen bg-gray-50 animate-pulse" />
});

const SingaporeTripHighlights = dynamic(() => import('@/components/sections/SingaporeTripHighlights'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const USP = dynamic(() => import('@/components/sections/USP'), {
  loading: () => <div className="h-96 bg-teal-50 animate-pulse" />
});

const SingaporeFAQ = dynamic(() => import('@/components/sections/SingaporeFAQ'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
});

export default function SingaporePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <SingaporeHero />
      <SingaporeTripOptions />
      <UnfilteredReviews />
      <Accommodation />
      <USP />
      <SingaporeTripHighlights />
      <GroupCTA />
      <CompanyLogos />
      <SingaporeFAQ />
      <Footer />
      <FloatingActionBar />
    </> 
  );
} 