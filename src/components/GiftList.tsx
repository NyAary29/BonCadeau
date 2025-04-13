'use client';

import { Gift } from '@/context/CartContext';
import GiftCard from './GiftCard';


type GiftListProps = {
  gifts: Gift[];
};

export default function GiftList({ gifts }: GiftListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {gifts.map((gift) => (
        <GiftCard
          key={gift.id}
          id={gift.id}
          image={gift.image}
          title={gift.title}
          description={gift.description}
          price={gift.price} people={''}        />
      ))}
    </div>
  );
}
