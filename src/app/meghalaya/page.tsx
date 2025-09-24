import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MeghalayaHero from '@/components/sections/MeghalayaHero';
import FloatingActionBar from '@/components/ui/FloatingActionBar';
import { ScrollProgress } from '@/components/ui/ScrollIndicators';

// Dynamically import below-the-fold components for better performance
const CompanyLogos = dynamic(() => import('@/components/sections/CompanyLogos'), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
});

const MeghalayaTripOptions = dynamic(() => import('@/components/sections/MeghalayaTripOptions'), {
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

const MeghalayaTripHighlights = dynamic(() => import('@/components/sections/MeghalayaTripHighlights'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const USP = dynamic(() => import('@/components/sections/USP'), {
  loading: () => <div className="h-96 bg-teal-50 animate-pulse" />
});

const MeghalayaFAQ = dynamic(() => import('@/components/sections/MeghalayaFAQ'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
});

export default function MeghalayaPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <MeghalayaHero />
      <MeghalayaTripOptions />
      <UnfilteredReviews />
      <Accommodation />
      <USP />
      <MeghalayaTripHighlights />
      <GroupCTA />
      <CompanyLogos />
      <MeghalayaFAQ />
      <Footer />
      <FloatingActionBar />
    </> 
  );
} 