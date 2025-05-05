import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
  link?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  imageUrl,
  link,
}) => {
  const cardContent = (
    <div className="card group h-full flex flex-col">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        </div>
      )}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-primary-light mb-3">
          <Calendar size={18} className="mr-2" />
          <span className="text-sm">{date} • {time}</span>
        </div>
        <h3 className="text-xl font-semibold font-heading mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Location:</span> {location}
        </p>
        <div className="mt-auto">
          <button className="btn-outline text-sm">View Details</button>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block h-full">
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
};

export default EventCard;