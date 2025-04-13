type Props = {
    categories: string[];
    activeCategory: string;
    onChange: (category: string) => void;
  };
  
  export default function CategoryTabs({ categories, activeCategory, onChange }: Props) {
    return (
      <div className="w-full bg-white py-6">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 relative">
          {categories.map((category) => (
            <div key={category} className="relative">
              {activeCategory === category && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#B68641]" />
              )}
              <button
                onClick={() => onChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-[#B68641] text-white shadow'
                    : 'text-[#5F4B32] hover:text-[#B68641]'
                }`}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  