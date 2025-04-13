import { Facebook, Youtube, Instagram } from 'lucide-react';
import { FaPinterestP } from 'react-icons/fa';
import { FaRegImage } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-[#5F4B32]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Bloc logo */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaRegImage className="text-[#B68641]" size={28} />
          <div>
            <p className="text-lg font-bold">Votre logo</p>
            <p className="text-xs text-[#B68641]">Bon cadeau</p>
          </div>
        </div>

        {/* Paiement sécurisé */}
        <div className="flex flex-col items-center gap-2 text-sm md:items-start">
          <span className="font-medium">Paiement sécurisé :</span>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <img src="/images/visa.png" alt="Visa" className="h-5" />
            <img src="/images/mastercard.png" alt="MasterCard" className="h-5" />
            <img src="/images/amex.png" alt="Amex" className="h-5" />
            <img src="/images/stripe.png" alt="Stripe" className="h-5" />
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center md:justify-end items-center gap-3">
          {[
            { icon: Facebook, href: '#' },
            { icon: Youtube, href: '#' },
            { icon: Instagram, href: '#' },
            { icon: FaPinterestP, href: '#' },
          ].map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className={`w-9 h-9 rounded-full flex items-center justify-center
                ${index === 0 ? 'bg-[#B68641] text-white' : 'bg-[#F8F5F0] text-[#B68641]'}
                hover:opacity-80 transition`}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 text-xs text-center py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <span className="text-[#5F4B32]">Site réalisé par Agence Publika</span>
        <div className="text-[#5F4B32] mt-2 md:mt-0 flex flex-wrap gap-2 justify-center">
          <span>Mentions légales</span>
          <span>|</span>
          <span>Politique de confidentialité</span>
          <span>|</span>
          <span>Conditions générales de ventes</span>
        </div>
      </div>
    </footer>
  );
}
