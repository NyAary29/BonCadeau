
 'use client';


// const giftData: Gift[] = [
//   {
//     id: 1,
//     title: 'Chèque cadeau',
//     description: 'Exception culinaire dans notre restaurant étoilé',
//     price: 120,
//     category: 'Formules repas',
//     image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 2,
//     title: 'Chèque cadeau',
//     description: 'Nuitée et petit-déjeuner inclus',
//     price: 180,
//     category: 'Repas & hébergement',
//     image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 3,
//     title: 'Chèque cadeau',
//     description: 'Dîner gastronomique pour 2 personnes',
//     price: 150,
//     category: 'Repas & cadeau',
//     image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 4,
//     title: 'Chèque cadeau',
//     description: 'Menu découverte avec accords mets-vins',
//     price: 95,
//     category: 'Formules repas',
//     image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 5,
//     title: 'Chèque cadeau',
//     description: 'Escapade gourmande avec nuit',
//     price: 200,
//     category: 'Repas & hébergement',
//     image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 6,
//     title: 'Chèque cadeau',
//     description: 'Dégustation prestige avec chef privé',
//     price: 250,
//     category: 'Repas & cadeau',
//     image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 7,
//     title: 'Chèque cadeau',
//     description: 'Week-end romantique avec spa',
//     price: 275,
//     category: 'Repas & hébergement',
//     image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 8,
//     title: 'Chèque cadeau',
//     description: 'Cours de cuisine avec un chef étoilé',
//     price: 85,
//     category: 'Formules repas',
//     image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 9,
//     title: 'Chèque cadeau',
//     description: 'Dégustation de vin privée',
//     price: 140,
//     category: 'Repas & cadeau',
//     image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 10,
//     title: 'Chèque cadeau',
//     description: 'Nuit de luxe en château',
//     price: 300,
//     category: 'Repas & hébergement',
//     image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 11,
//     title: 'Chèque cadeau',
//     description: 'Brunch gourmand du dimanche',
//     price: 60,
//     category: 'Formules repas',
//     image: 'https://images.unsplash.com/photo-1529563021893-cc83c992d00d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
//   {
//     id: 12,
//     title: 'Chèque cadeau',
//     description: 'Surprise gastronomique pour anniversaire',
//     price: 175,
//     category: 'Repas & cadeau',
//     image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
//   },
// ];





import { useState } from 'react';
import GiftList from '@/components/GiftList';
import Pagination from '@/components/Pagination';
import CategoryTabs from '@/components/CategoryTabs';
import { Gift, useGiftContext } from '@/context/CartContext';

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

  // 🔁 Changement de catégorie : reset à page 1
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

      {/* Pagination visible seulement si plusieurs pages */}
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
