'use client';

import {
  Gift,
  FileText,
  CreditCard,
  Printer,
  CheckCircle,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const steps = [
  { label: 'Choisissez\nun bon', icon: Gift },
  { label: 'Informations\nsur le bon', icon: FileText },
  { label: 'Paiement', icon: CreditCard },
  { label: 'Imprimer\nvotre bon', icon: Printer },
];

export default function Stepper() {
  const pathname = usePathname();

  const currentStep = (() => {
    if (pathname === '/') return 1;
    if (/^\/gift\/[^/]+$/.test(pathname)) return 2;
    if (pathname.includes('/formulaire')) return 3;
    if (pathname.includes('/confirmation')) return 4;
    return 1;
  })();

  return (
    <section className="w-full bg-[#FFF8EC] py-6 px-4">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-center gap-6 flex-wrap">
        {steps.map((step, index) => {
          const stepIndex = index + 1;
          const isCompleted = stepIndex < currentStep;
          const isCurrent = stepIndex === currentStep;

          return (
            <div className="flex items-center w-max" key={stepIndex}>
              <div className="flex flex-col items-center text-center relative">
                <div
                  className={clsx(
                    'w-14 h-14 rounded-full flex items-center justify-center relative z-10 transition-all',
                    {
                      'bg-[#B68641] text-white': isCompleted || isCurrent,
                      'border border-[#B68641] bg-white text-[#B68641]': !isCompleted && !isCurrent,
                    }
                  )}
                >
                  <step.icon className="w-6 h-6" />

                  {isCompleted && (
                    <span className="absolute -top-1 -right-1 bg-green-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs shadow">
                      <CheckCircle size={12} />
                    </span>
                  )}
                </div>

                <p
                  className={clsx(
                    'text-sm font-medium mt-2 whitespace-pre-line',
                    isCompleted || isCurrent ? 'text-[#B68641]' : 'text-[#5F4B32]'
                  )}
                >
                  {step.label}
                </p>
              </div>

              {stepIndex !== steps.length && (
                <div className="h-px w-8 sm:w-16 border-t border-dotted border-[#B68641] mx-1 sm:mx-3" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
