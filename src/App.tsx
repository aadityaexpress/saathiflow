import React, { useState } from 'react';
import { ProductHeader } from './components/product/ProductHeader';
import { ProductLanding } from './components/product/ProductLanding';
import { TransactionChecker, IncidentCategory } from './components/product/TransactionChecker';
import { HowItWorks } from './components/product/HowItWorks';
import { PrivacyNotice } from './components/product/PrivacyNotice';
import { ProductFooter } from './components/product/ProductFooter';
import { ResearchWorkspace } from './components/research/ResearchWorkspace';

export type ProductPage = 'home' | 'checker' | 'howItWorks' | 'privacy';

export const App: React.FC = () => {
  // Experience Switch: 'product' (default) or 'research' (evidence workspace)
  const [experienceMode, setExperienceMode] = useState<'product' | 'research'>('product');

  // Customer Product Active Sub-Page
  const [productPage, setProductPage] = useState<ProductPage>('home');

  // Optional pre-selected incident category for TransactionChecker
  const [selectedCategory, setSelectedCategory] = useState<IncidentCategory | undefined>(undefined);

  const handleStartChecker = (category?: string) => {
    if (category) {
      setSelectedCategory(category as IncidentCategory);
    } else {
      setSelectedCategory(undefined);
    }
    setProductPage('checker');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProduct = (page: ProductPage) => {
    setProductPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenResearch = () => {
    setExperienceMode('research');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProduct = () => {
    setExperienceMode('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in Research Workspace mode, render the research suite
  if (experienceMode === 'research') {
    return <ResearchWorkspace onBackToProduct={handleBackToProduct} />;
  }

  // Primary Default: Customer Product Experience
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      <div>
        <ProductHeader
          activePage={productPage}
          onNavigate={handleNavigateProduct}
          onOpenResearch={handleOpenResearch}
        />

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          {productPage === 'home' && (
            <ProductLanding
              onStartChecker={handleStartChecker}
              onNavigateHowItWorks={() => handleNavigateProduct('howItWorks')}
              onNavigatePrivacy={() => handleNavigateProduct('privacy')}
            />
          )}

          {productPage === 'checker' && (
            <TransactionChecker
              key={selectedCategory || 'default'}
              initialCategory={selectedCategory}
              onBackToHome={() => handleNavigateProduct('home')}
            />
          )}

          {productPage === 'howItWorks' && (
            <HowItWorks
              onStartChecker={() => handleStartChecker()}
            />
          )}

          {productPage === 'privacy' && <PrivacyNotice />}
        </main>
      </div>

      <ProductFooter
        onNavigate={handleNavigateProduct}
        onOpenResearch={handleOpenResearch}
      />
    </div>
  );
};

export default App;
