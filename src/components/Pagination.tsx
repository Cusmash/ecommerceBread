interface Props {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }
  
  export const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }: Props) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    return (
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  