import { GiftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
type GiftCardProps = {
  id:number;
  image: string;
  title: string;
  description: string;
  price: number;
  people: string;
};

export default function GiftCard({
  id,
  image,
  title,
  description,
  price,
  people,
}: GiftCardProps) {
  const router = useRouter();
  return (
    <div   onClick={() => router.push(`/gift/${id}`)} className="bg-white rounded-xl overflow-hidden shadow border border-gray-200 w-full max-w-sm">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="px-5 py-4 text-center flex flex-col gap-3">
        <h3 className="text-[#B68641] font-semibold text-base">{title}</h3>
        <p className="text-sm text-[#444] leading-snug">{description}</p>
        <div className="bg-[#F8F5F0] px-3 py-1.5 rounded-md flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-1 text-[#B68641]">
            <GiftIcon size={16} />
            <span>À partir de</span>
          </div>
          <span className="text-[#5F4B32] font-bold">{price}</span>
        </div>
        <div className="flex items-center justify-between mt-2 text-sm">
          <span className="text-[#5F4B32]">{people}  Pour 2 personnes</span>
         
          <button className="px-4 py-1 rounded-full border border-[#B68641] text-[#B68641] font-medium text-sm bg-white hover:bg-[#B68641] hover:text-white transition">
            Offrir
          </button>
        </div>
      </div>
    </div>
  );
}
