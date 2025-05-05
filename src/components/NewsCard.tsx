import React from 'react';
import { Calendar, User } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  link?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  category,
  date,
  author,
  imageUrl,
  link
}) => {
  const cardContent = (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-accent text-primary text-xs font-semibold py-1 px-2 rounded z-10">
          {category}
        </span>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold font-heading mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex flex-wrap text-gray-500 text-sm mt-auto space-x-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{author}</span>
          </div>
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

export default NewsCard;