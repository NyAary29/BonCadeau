
 'use client';


import { useState } from 'react';
import GiftList from '@/components/GiftList';
import Pagination from '@/components/Pagination';
import CategoryTabs from '@/components/CategoryTabs';
import { useGiftContext } from '@/context/CartContext';

const categories = ['Tous', 'Formules repas', 'Repas & hébergement', 'Repas & cadeau'];

export default function Home() {
  const { giftData } = useGiftContext();
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // 🔎 Filtrage
  const filteredGifts =
    activeCategory === 'Tous'
      ? giftData
      : giftData.filter((gift) => gift.category === activeCategory);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredGifts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedGifts = filteredGifts.slice(startIndex, endIndex);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-20 bg-white">
    
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={handleCategoryChange}
      />

      <GiftList gifts={paginatedGifts} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
