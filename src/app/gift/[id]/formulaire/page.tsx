'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function GiftFormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ nom: ''});

  const { id } = useParams();
  const [cgvAccepted, setCgvAccepted] = useState(false);
  const [selectedModel, setSelectedModel] = useState<number | null>(null);



const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!cgvAccepted || !selectedModel) return;

  // Extrait les champs utiles ici
  const nom =  'Bénéficiaire';
  const modele = selectedModel;
  const code = generateGiftCode(); // Fonction à créer

  router.push(
    `/gift/${id}/confirmation?nom=${encodeURIComponent(nom)}&modele=${modele}&code=${code}`
  );
};

function generateGiftCode() {
  return Math.floor(100000 + Math.random() * 900000);
}


  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Retour */}
      <button onClick={() => router.back()} className="text-sm text-[#B68641] mb-4">
        &lt; Revenir aux informations sur le bon
      </button>

      {/* Titre */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#5F4B32]">Complétez le formulaire</h1>
        <p className="text-sm text-[#B68641] mt-1">Recevez immédiatement votre bon cadeau</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1 : Acheteur */}
        <div className="border rounded-xl p-5 space-y-4">
          <h2 className="text-[#B68641] font-semibold text-lg flex items-center gap-2">
            <span className="bg-[#B68641] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              1
            </span>
            Identité de l’acheteur du bon cadeau
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email *" required className="input" />
            <input type="text" placeholder="Adresse *" required className="input" />
            <input type="text" placeholder="Code postal *" required className="input" />
            <input type="text" placeholder="Ville *" required className="input" />
            <input type="tel" placeholder="Téléphone" className="input md:col-span-2" />
          </div>
        </div>

        {/* Section 2 : Informations sur le bon */}
        <div className="border rounded-xl p-5 space-y-4">
          <h2 className="text-[#B68641] font-semibold text-lg flex items-center gap-2">
            <span className="bg-[#B68641] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              2
            </span>
            Informations présentes sur le bon cadeau
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Nom *" required className="input" onChange={(e) => setFormData({ ...formData, nom: e.target.value })}            />
            <input type="text" placeholder="De la part de *" required className="input" />
            <textarea placeholder="Message personnalisé..." className="input md:col-span-2 h-20 resize-none" />
          </div>
        </div>

        {/* Section 3 : Modèle */}
        <div className="border border-gray-200 rounded-xl p-5 space-y-4">
  <h2 className="text-[#B68641] font-semibold text-lg flex items-center gap-2">
    <span className="bg-[#B68641] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
      3
    </span>
    Choisir un modèle
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {[1, 2, 3].map((num) => (
      <label
        key={num}
        className={`cursor-pointer rounded-xl overflow-hidden border-2 transition bg-white ${
          selectedModel === num ? 'border-[#B68641]' : 'border-gray-200'
        }`}
      >
        {/* Fond marbré sur chaque modèle */}
        <div
          className="p-3 flex flex-col items-center justify-center"
          style={{
            backgroundImage: 'url("/backgrounds/marble.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img
            src={`/models/model${num}.jpg`}
            alt={`Modèle ${num}`}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="flex justify-center py-2 bg-white">
          <input
            type="radio"
            name="model"
            checked={selectedModel === num}
            onChange={() => setSelectedModel(num)}
            className="accent-[#B68641]"
          />
        </div>
      </label>
    ))}
  </div>
</div>
        {/* CGV + bouton */}
        <div className="space-y-4 text-sm text-[#5F4B32]">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={cgvAccepted}
              onChange={(e) => setCgvAccepted(e.target.checked)}
            />
            <span>J'accepte les conditions générales de vente et de retour</span>
          </label>

          <p className="text-xs text-[#888]">
            En validant ce formulaire, vous acceptez que vos données soient utilisées pour le
            traitement de votre commande et l’envoi du bon cadeau.
          </p>

          <button
            type="submit"
            disabled={!cgvAccepted || selectedModel === null}
            className={`px-6 py-2 rounded-full font-medium text-white ${
              cgvAccepted && selectedModel !== null
                ? 'bg-[#B68641] hover:bg-[#a67635]'
                : 'bg-[#ccc] cursor-not-allowed'
            }`}
          >
            Valider et payer
          </button>
        </div>
      </form>
    </div>
  );
}
