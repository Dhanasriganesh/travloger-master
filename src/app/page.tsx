import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FloatingActionBar from '@/components/ui/FloatingActionBar';
import { ScrollProgress } from '@/components/ui/ScrollIndicators';

// Dynamically import below-the-fold components for better performance
const CompanyLogos = dynamic(() => import('@/components/sections/CompanyLogos'), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
});

const TripOptions = dynamic(() => import('@/components/sections/TripOptions'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const UnfilteredReviews = dynamic(() => import('@/components/sections/UnfilteredReviews'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const GroupCTA = dynamic(() => import('@/components/sections/GroupCTA'), {
  loading: () => <div className="h-96 bg-orange-400 animate-pulse" />
});

// const Features = dynamic(() => import('@/components/sections/Features'), {
//   loading: () => <div className="h-80 bg-white animate-pulse" />
// });

const Accommodation = dynamic(() => import('@/components/sections/Accommodation'), {
  loading: () => <div className="h-screen bg-gray-50 animate-pulse" />
});

const TripHighlights = dynamic(() => import('@/components/sections/TripHighlights'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const USP = dynamic(() => import('@/components/sections/USP'), {
  loading: () => <div className="h-96 bg-teal-50 animate-pulse" />
});

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
});



export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <TripOptions />
      <UnfilteredReviews />
      <Accommodation />
      <USP />
      <TripHighlights />
      <GroupCTA />
      <CompanyLogos />
      <FAQ />
      <Footer />
      <FloatingActionBar />
    </> 
  );
}
