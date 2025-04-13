// components/PageLoader.tsx

export default function PageLoader({ message = 'Chargement en cours...' }: { message?: string }) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-white text-[#5F4B32]">
        <div className="w-10 h-10 border-4 border-[#B68641] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-sm">{message}</p>
      </div>
    );
  }
  