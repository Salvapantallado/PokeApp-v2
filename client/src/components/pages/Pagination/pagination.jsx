import Bump from "../../helpers/Bump.mp3";


export default function Pagination({currentPage, setCurrentPage, pageNumber}) {
    
  
    const nextPage = () => {
      if (currentPage < pageNumber) {setCurrentPage(currentPage + 1)};
      if (currentPage === pageNumber) return new Audio(Bump).play();
    };
  
    const prevPage = () => {
      if (currentPage !== 1) {setCurrentPage(currentPage - 1)};
      if(currentPage === 1) return new Audio(Bump).play()
    };


    return (
        <div className="row center">
            <button
            className="home-button"
              onClick={() => {
                prevPage();
              }}
            >
              Previous
            </button>
            <button
            className="home-button"
              onClick={() => {
                nextPage();
              }}
            >
              Next
            </button>
          </div>
    )
}