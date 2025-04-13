'use client';

import { useSearchParams } from 'next/navigation';
import {  useRef } from 'react';
import html2pdf from 'html2pdf.js';

export default function GiftConfirmationPage() {
 
  const searchParams = useSearchParams();

  const nom = searchParams.get('nom') || 'Nom du bénéficiaire';
  const modele = searchParams.get('modele') || '1';
  const numero = searchParams.get('code') || generateGiftNumber();

  const pdfRef = useRef(null);

  const downloadPDF = () => {
    if (!pdfRef.current) return;
    html2pdf()
      .from(pdfRef.current)
      .set({
        margin: 0,
        filename: `bon-cadeau-${numero}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .save();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <p className="text-sm text-[#5F4B32] mb-2">
        Bon cadeau <span className="text-[#B68641] font-semibold">n° {numero}</span>
      </p>

      {/* Aperçu à convertir en PDF */}
      <div ref={pdfRef} className="relative w-full max-w-2xl bg-white shadow-xl rounded-xl p-6">
        <img
          src={`/models/model${modele}.jpg`}
          alt="Modèle visuel"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute top-6 right-6 text-xs text-[#5F4B32]">
          Votre logo <br />
          Bon cadeau
        </div>
        <div className="absolute bottom-10 left-10 text-[#5F4B32] font-medium text-sm">
          Pour : <span className="font-bold">{nom}</span>
        </div>
        <div className="absolute bottom-4 left-10 text-xs text-[#B68641]">
          www.votre-site.com
        </div>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 bg-[#B68641] text-white px-6 py-2 rounded-full hover:bg-[#a67635] transition"
      >
        Télécharger votre bon
      </button>
    </div>
  );
}

// Génère un numéro de bon aléatoire
function generateGiftNumber() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
