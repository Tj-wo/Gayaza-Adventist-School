import React from 'react';

interface StaffCardProps {
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
  email?: string;
}

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  position,
  imageUrl,
  bio,
  email
}) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold font-heading mb-1">{name}</h3>
        <p className="text-secondary font-medium mb-3">{position}</p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{bio}</p>
        {email && (
          <a 
            href={`mailto:${email}`} 
            className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  );
};

export default StaffCard;