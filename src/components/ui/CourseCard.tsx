import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  duration: string;
  level: string;
  students: number;
  imageUrl: string;
  price: number;
  discountPrice?: number;
  tags: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  duration,
  level,
  imageUrl,
  price,
  discountPrice,
}) => {
  const navigate = useNavigate();
  
  const formatPrice = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };
  
  const discountPercentage = discountPrice 
    ? Math.round(((price - discountPrice) / price) * 100) 
    : 0;

  const handleEnrollClick = () => {
    navigate('/payment', {
      state: {
        courseDetails: {
          title,
          price: formatPrice(price),
          duration,
          level,
        },
      },
    });
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3 mb-4">{instructor}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{duration}</span>
          <span>{level}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-2xl font-bold text-primary">{formatPrice(price)}</span>
        <Button 
          onClick={handleEnrollClick}
          className="bg-green-600 hover:bg-green-700 text-white transition-colors"
        >
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
