import React, { useState } from 'react';

export default function Carousel({ user, onLogout }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      title: "Swiss Alps", 
      image: "https://picsum.photos/seed/alps/1200/800" 
    },
    { 
      title: "Banff National Park", 
      image: "https://picsum.photos/seed/banff/1200/800" 
    },
    { 
      title: "Yosemite Valley", 
      image: "https://picsum.photos/seed/yosemite/1200/800" 
    },
    { 
      title: "Norwegian Fjords", 
      image: "https://picsum.photos/seed/fjords/1200/800" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      
      <div className="w-full max-w-5xl relative z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="text-white text-lg">
            Welcome, <span className="text-cyan-400 font-semibold">{user.name || user.email}</span>!
          </div>
          <button 
            onClick={onLogout} 
            className="flex items-center gap-2 px-6 py-3 bg-slate-900/80 hover:bg-slate-800/80 text-white rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>

        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-cyan-500/30">
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/80 to-blue-500/80"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                {slides[currentSlide].title}
              </h2>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-20">
            <button 
              onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)} 
              className="p-3 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 backdrop-blur-sm border border-cyan-400/30 transition-all text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)} 
                  className={`h-3 rounded-full transition-all ${
                    i === currentSlide 
                      ? 'w-10 bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                      : 'w-3 bg-cyan-400/30 hover:bg-cyan-400/50'
                  }`} 
                />
              ))}
            </div>
            <button 
              onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} 
              className="p-3 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 backdrop-blur-sm border border-cyan-400/30 transition-all text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-400 text-sm z-20 border border-cyan-500/30">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}