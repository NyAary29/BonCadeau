type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-full border text-sm font-semibold transition-all ${
            currentPage === page
              ? 'bg-[#B68641] text-white border-transparent'
              : 'text-[#B68641] border-gray-300 hover:bg-[#F8F5F0]'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
