import React from 'react';
import FeedItem from './FeedItem';

const FeedList = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedList;
