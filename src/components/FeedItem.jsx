import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Bookmark, Plus, Star, Film, Tv2, MoreHorizontal } from 'lucide-react';

const ScoreBadge = ({ score }) => {
  const pct = Math.max(0, Math.min(10, score)) * 10;
  const color = score >= 8 ? 'from-emerald-500 to-lime-400' : score >= 5 ? 'from-amber-500 to-yellow-400' : 'from-rose-500 to-orange-500';
  return (
    <div className="relative h-12 w-12 shrink-0">
      <svg className="absolute inset-0" viewBox="0 0 36 36">
        <path
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
          strokeLinecap="round"
        />
        <path
          className="text-indigo-500"
          stroke="url(#grad)"
          strokeWidth="4"
          fill="none"
          d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
          strokeDasharray="100,100"
          strokeDashoffset={100 - pct}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} opacity-10`} />
      <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-gray-800">
        {score}
      </div>
    </div>
  );
};

const FeedItem = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [likes, setLikes] = useState(item.likes || 0);

  const toggleLike = () => {
    setLiked((v) => !v);
    setLikes((n) => (liked ? Math.max(0, n - 1) : n + 1));
  };

  const typeIcon = item.type === 'tv' ? <Tv2 className="h-4 w-4" /> : <Film className="h-4 w-4" />;

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        {/* Poster */}
        <img
          src={item.poster}
          alt={item.title}
          className="h-20 w-16 shrink-0 rounded-lg object-cover"
        />

        <div className="min-w-0 flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm text-gray-500">
                <span className="font-semibold text-gray-900">{item.userName}</span> ranked
                <span className="mx-1 font-medium text-indigo-600">{item.title}</span>
              </p>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5">
                  {typeIcon}
                  {item.type === 'tv' ? 'TV Show' : 'Movie'}
                </span>
                <span>•</span>
                <span>{item.time}</span>
              </div>
            </div>
            <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Comment preview */}
          {item.comment && (
            <p className="mt-2 line-clamp-2 text-sm text-gray-700">“{item.comment}”</p>
          )}

          {/* Actions row */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setReposted((v) => !v)}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm ${
                  reposted ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Repeat2 className="h-4 w-4" />
                <span>Repost</span>
              </button>
              <button
                onClick={toggleLike}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm ${
                  liked ? 'bg-rose-50 text-rose-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                <span>{likes}</span>
              </button>
              <button className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm text-gray-600 hover:bg-gray-100">
                <MessageCircle className="h-4 w-4" />
                <span>Comment</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setBookmarked((v) => !v)}
                aria-label="Bookmark"
                className={`rounded-full p-2 ${
                  bookmarked ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-700">
                <Plus className="h-4 w-4" /> Rank
              </button>
            </div>
          </div>
        </div>

        {/* Score */}
        <div className="ml-1 flex flex-col items-center">
          <ScoreBadge score={item.score} />
          <div className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            <span>{item.score}/10</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeedItem;
