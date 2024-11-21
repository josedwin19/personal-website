import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
}

function VideoCard({ title, description, thumbnail, duration, date }: VideoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-3 bg-white rounded-full">
            <Play className="w-6 h-6 text-blue-600" />
          </button>
        </div>
        <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;