import { useState } from "react";

interface PaginationProps {
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ totalPages = 3, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <div className="flex flex-row justify-end gap-[10px] py-[12px]">
      <button
        className={`px-[15px] py-[10px] rounded-full transition border-none
          ${currentPage === 1 
            ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
            : "bg-primary text-white hover:brightness-110"}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`px-[15px] py-[10px] rounded-full transition border-none
            ${page === currentPage 
              ? "bg-primary text-white font-semibold" 
              : "bg-gray-100 hover:bg-gray-200"}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={`px-[15px] py-[10px] rounded-full transition border-none
          ${currentPage === totalPages 
            ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
            : "bg-primary text-white hover:brightness-110"}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
    </div>
  );
}
