import React from 'react';
import Hero3D from './components/Hero3D';
import FeedList from './components/FeedList';
import BottomNav from './components/BottomNav';

const demoFeed = [
  {
    id: '1',
    userName: 'Ava Chen',
    title: 'Dune: Part Two',
    type: 'movie',
    score: 9,
    time: '2h ago',
    poster: 'https://image.tmdb.org/t/p/w185/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    comment: 'Staggering scale and sound. Villeneuve cooked. Hans Zimmer did it again.',
    likes: 42,
  },
  {
    id: '2',
    userName: 'Leo Park',
    title: 'The Bear — S2',
    type: 'tv',
    score: 8,
    time: '5h ago',
    poster: 'https://image.tmdb.org/t/p/w185/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg',
    comment: 'Episode 6 had me holding my breath. Remarkably tender writing.',
    likes: 19,
  },
  {
    id: '3',
    userName: 'Maya Patel',
    title: 'Past Lives',
    type: 'movie',
    score: 10,
    time: '1d ago',
    poster: 'https://image.tmdb.org/t/p/w185/kqYDoEb9PxLxm9JATsY2lA4lL2A.jpg',
    comment: 'Quietly devastating. The final scene will stay with me.',
    likes: 88,
  },
];

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white text-gray-900">
      <div className="mx-auto max-w-md pb-24">
        {/* Hero with Spline */}
        <Hero3D />

        {/* Feed */}
        <main className="-mt-6 space-y-4 px-4">
          <div className="mx-auto mb-2 flex max-w-md items-center justify-between">
            <h2 className="text-lg font-semibold">My Activity</h2>
            <div className="text-sm text-gray-500">Friends & You</div>
          </div>
          <FeedList items={demoFeed} />
        </main>

        {/* Bottom navigation */}
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
