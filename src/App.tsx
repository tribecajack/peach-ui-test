import React from 'react';
import { Search as Peach, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Peach className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">Peach Markets</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-orange-500">Lend</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Earn</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Stats</a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              The Next Generation of
              <span className="text-orange-500"> Multi-Asset Lending</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
            Experience instant offers & approvals, access to deep liquidity pools, and flexible repayment terms on the most innovative decentralized lending platform            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center">
                Start Trading <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80"
              alt="Trading Chart"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Peach Markets?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">State-of-the-art lending analytics and interactive market insights</h3>
              <p className="text-gray-600">
              Professional lending dashboards with real-time market insights and flexible cross-asset borrowing capabilities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built on Solana with battle-tested security and lightning-fast execution.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Low Fees</h3>
              <p className="text-gray-600">
                Competitive trading fees with rewards for active traders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-orange-500 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$2.5B+</div>
              <div className="text-orange-100">Total Trading Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100k+</div>
              <div className="text-orange-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0.01%</div>
              <div className="text-orange-100">Base Taker Fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Peach className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">Peach Markets</span>
            </div>
            <div className="text-gray-600">
              © 2025 Peach Markets. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;