import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Presentation } from 'lucide-react';
import { slideList } from './Slides';

export const PresentationViewer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideList.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slideList[currentSlide];

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 overflow-hidden font-sans">
      
      {/* Header Banner */}
      <header className="flex-none h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3 text-slate-700">
          <Presentation className="h-6 w-6 text-blue-600" />
          <h1 className="font-semibold tracking-tight text-lg hidden sm:block">
            Proyecto Universitario: Cálculo I
          </h1>
        </div>
        <div className="flex gap-2 text-sm font-medium text-slate-500 bg-slate-100 py-1.5 px-4 rounded-full">
          Diapositiva {currentSlide + 1} de {totalSlides}
        </div>
      </header>

      {/* Slide Canvas */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 flex flex-col justify-center relative overflow-y-auto">
        <div className="w-full h-full bg-slate-50/50 flex flex-col pt-4">
          <CurrentSlideComponent nextSlide={nextSlide} />
        </div>
      </main>

      {/* Footer Controls */}
      <footer className="flex-none h-20 bg-white border-t border-slate-200 px-6 flex items-center justify-between z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all
            disabled:opacity-40 disabled:cursor-not-allowed
            text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slideList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full h-2.5 
                ${idx === currentSlide ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              aria-label={`Ir a diapositiva ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all
            disabled:opacity-40 disabled:cursor-not-allowed
            bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md active:bg-blue-800"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </footer>
    </div>
  );
};
