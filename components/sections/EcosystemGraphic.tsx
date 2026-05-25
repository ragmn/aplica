'use client'

import React from 'react'
import { Cloud, LayoutGrid, Layers, ShieldCheck, Database, Smartphone, Building2 } from 'lucide-react'

export function EcosystemGraphic() {
  return (
    <div className="relative w-full max-w-[650px] aspect-square mx-auto font-sans flex items-center justify-center">
      
      {/* --- GLOWING BACKGROUND BLOBS --- */}
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[30%] w-[50%] h-[50%] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* --- SVG CONNECTING LINES --- */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Center to Top (ERP) */}
        <path d="M50 50 Q 50 30 50 15" stroke="url(#line-grad)" strokeWidth="0.4" fill="none" strokeDasharray="1 1" />
        {/* Center to Bottom (Security) */}
        <path d="M50 50 Q 50 70 50 85" stroke="url(#line-grad)" strokeWidth="0.4" fill="none" strokeDasharray="1 1" />
        {/* Center to Left (Data) */}
        <path d="M50 50 Q 30 50 15 50" stroke="url(#line-grad)" strokeWidth="0.4" fill="none" strokeDasharray="1 1" />
        {/* Center to Right (Power Platform) */}
        <path d="M50 50 Q 70 50 85 50" stroke="url(#line-grad)" strokeWidth="0.4" fill="none" strokeDasharray="1 1" />
        {/* Center to Top Right (Azure) */}
        <path d="M50 50 Q 65 35 80 20" stroke="url(#line-grad)" strokeWidth="0.4" fill="none" strokeDasharray="1 1" />
        {/* Center to Top Left (Power Apps) */}
        <path d="M50 50 Q 35 35 20 20" stroke="url(#line-grad)" strokeWidth="0.4" fill="none" strokeDasharray="1 1" />
      </svg>

      {/* --- NODES --- */}
      
      {/* 1. Center: Dynamics 365 */}
      <div className="absolute z-20 flex flex-col items-center justify-center w-[35%] h-[35%] bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500 hover:scale-105 hover:bg-white/80">
        <div className="w-16 h-16 mb-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <LayoutGrid className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="text-[1.1rem] sm:text-xl font-extrabold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent text-center leading-tight">
          Dynamics 365 &<br/>Power Platform
        </h3>
      </div>

      {/* 2. Top: ERP */}
      <div className="absolute top-[5%] left-[50%] -translate-x-1/2 z-10 flex flex-col items-center justify-center w-[22%] aspect-square bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 group">
        <Building2 className="w-8 h-8 mb-2 text-slate-400 group-hover:text-blue-500 transition-colors" strokeWidth={1.5} />
        <span className="text-sm font-semibold text-slate-700 text-center">ERP</span>
      </div>

      {/* 3. Bottom: Security & Governance */}
      <div className="absolute bottom-[5%] left-[50%] -translate-x-1/2 z-10 flex flex-col items-center justify-center w-[26%] aspect-square bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl shadow-lg transition-all duration-500 hover:translate-y-2 hover:bg-white/70 group">
        <ShieldCheck className="w-8 h-8 mb-2 text-slate-400 group-hover:text-purple-500 transition-colors" strokeWidth={1.5} />
        <span className="text-sm font-semibold text-slate-700 text-center leading-tight px-2">Security &<br/>Governance</span>
      </div>

      {/* 4. Left: Data & AI */}
      <div className="absolute top-[50%] left-[2%] -translate-y-1/2 z-10 flex flex-col items-center justify-center w-[22%] aspect-square bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-x-2 hover:bg-white/70 group">
        <Database className="w-8 h-8 mb-2 text-slate-400 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
        <span className="text-sm font-semibold text-slate-700 text-center">Data & AI</span>
      </div>

      {/* 5. Right: Power Platform */}
      <div className="absolute top-[50%] right-[2%] -translate-y-1/2 z-10 flex flex-col items-center justify-center w-[24%] aspect-square bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl shadow-lg transition-all duration-500 hover:translate-x-2 hover:bg-white/70 group">
        <Layers className="w-8 h-8 mb-2 text-slate-400 group-hover:text-emerald-500 transition-colors" strokeWidth={1.5} />
        <span className="text-sm font-semibold text-slate-700 text-center leading-tight">Power<br/>Platform</span>
      </div>

      {/* 6. Top Right: Azure */}
      <div className="absolute top-[10%] right-[10%] z-10 flex flex-col items-center justify-center w-[20%] aspect-square bg-white/60 backdrop-blur-lg border border-white/80 rounded-full shadow-xl transition-all duration-500 hover:scale-110 group">
        <Cloud className="w-7 h-7 mb-1 text-slate-500 group-hover:text-blue-500 transition-colors" strokeWidth={1.5} />
        <span className="text-sm font-bold text-slate-800">Azure</span>
      </div>

      {/* 7. Top Left: Power Apps */}
      <div className="absolute top-[10%] left-[10%] z-10 flex flex-col items-center justify-center w-[20%] aspect-square bg-white/60 backdrop-blur-lg border border-white/80 rounded-full shadow-xl transition-all duration-500 hover:scale-110 group">
        <Smartphone className="w-7 h-7 mb-1 text-slate-500 group-hover:text-fuchsia-500 transition-colors" strokeWidth={1.5} />
        <span className="text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">Power<br/>Apps</span>
      </div>

    </div>
  )
}
