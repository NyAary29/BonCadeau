'use client';


import { useGiftContext } from '@/context/CartContext';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GiftDetailPage() {
  const { giftData } = useGiftContext();
  const { id } = useParams();
  const gift = giftData.find((g) => g.id === Number(id));
  const [priceOption, setPriceOption] = useState(1); // 1 = 12€, 2 = 34€
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  if (!gift) return <div className="text-center py-10">Bon non trouvé</div>;

  const price = priceOption === 1 ? 12 : 34;
  const total = price * quantity;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 md:pl-64 grid md:grid-cols-2 gap-8 ">
      {/* image */}
      <div>
        <button onClick={() => router.back()} className="text-sm text-[#B68641] mb-4">&lt; Revenir au choix du bon</button>
        <img src={gift.image} alt={gift.title} className="w-full rounded-xl object-cover" />
      </div>

      {/* détails */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#5F4B32]">{gift.title}</h2>
        <span className="bg-[#F8F5F0] text-[#5F4B32] text-sm rounded-full px-3 py-1 w-max">Pour 2 personnes</span>
        <p className="text-sm text-[#444]">{gift.description}</p>

        <div className="space-y-2 mt-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              value="12"
              checked={priceOption === 1}
              onChange={() => setPriceOption(1)}
            />
            <span>12,00€ (hors boisson)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              value="34"
              checked={priceOption === 2}
              onChange={() => setPriceOption(2)}
            />
            <span>34,00€ avec vins (hors apéro & café)</span>
          </label>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-8 h-8 rounded-full bg-[#F8F5F0] text-[#5F4B32]">-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} className="w-8 h-8 rounded-full bg-[#F8F5F0] text-[#5F4B32]">+</button>
        </div>

        <div className="mt-2 font-semibold text-[#5F4B32] text-lg">
          Total : {total.toFixed(2)}€ <span className="text-sm font-normal">Pour 2 personnes</span>
        </div>

        <button  onClick={() => router.push(`/gift/${gift.id}/formulaire`)} className="bg-[#B68641] hover:bg-[#a67635] text-white font-medium py-2 px-6 rounded-full w-max mt-4">
          Commander
        </button>
      </div>

      <div className="md:col-span-2 mt-10">
        <h3 className="text-lg font-bold text-[#5F4B32] mb-2">Description</h3>
        <p className="text-sm text-[#444] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
    </div>
  );
}
