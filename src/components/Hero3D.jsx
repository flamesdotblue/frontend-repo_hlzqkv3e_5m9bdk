import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative h-[320px] w-full overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

      {/* Headline */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-indigo-500/40 px-2 text-xs font-medium backdrop-blur">
            Live Feed
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-semibold leading-tight">Your Movie & TV Activity</h1>
        <p className="text-sm text-white/80">See what friends are watching, rating, and discussing in real-time.</p>
      </div>
    </section>
  );
};

export default Hero3D;
