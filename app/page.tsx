import React from 'react';
import Header from './_components/Header';
import Hero from './_components/Hero';
import Problems from './_components/Problems';
import Analogy from './_components/Analogy';
import Features from './_components/Features';
import Results from './_components/Results';
import Scenario from './_components/Scenario';
import FAQPage from './_components/FAQPage';
import Pricing from './_components/Pricing';
import CTA from './_components/CTA';
import Footer from './_components/Footer';
import FloatingBlobs from './_components/FloatingBlob';

// Main Landing Page Component
function AEDLandingPage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* Problem/Solution Section */}
      <Problems/>

      {/* Restaurant Analogy Section */}
      <Analogy/>

      {/* Features Section */}
      <Features/>

      {/* Real Results Section */}
      <Results/>

      {/* Scenarios Section */}
      <Scenario/>

      {/* FAQ Section */}
      <FAQPage/>

      {/* Pricing Section */}
      <Pricing/>

      {/* CTA Section */}
      <CTA/>

      {/* Footer */}
      <Footer/>

      {/* Floating Blob */}
      <FloatingBlobs/>
    </div>
  );
}


export default AEDLandingPage;