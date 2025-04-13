'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Gift = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

type GiftContextType = {
  giftData: Gift[];
};

const GiftContext = createContext<GiftContextType | undefined>(undefined);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [giftData, setGiftData] = useState<Gift[]>([]);

  useEffect(() => {
    const fetchGifts = async () => {
      const res = await fetch('/data/gifts.json');
      const data = await res.json();
      setGiftData(data);
    };

    fetchGifts();
  }, []);

  return (
    <GiftContext.Provider value={{ giftData }}>
      {children}
    </GiftContext.Provider>
  );
}

export function useGiftContext() {
  const context = useContext(GiftContext);
  if (!context) throw new Error('useGiftContext must be used inside GiftProvider');
  return context;
}
