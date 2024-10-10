import { CgArrowRight } from 'react-icons/cg'
import "./index.scss"




const Book = () => {
    return (
        <section className="section book-now">
       <div className="">
        <div className="book--content container">
        <h3>
          Don't Settle For anything Less Than The Best
          And Let Us Help Plan Your Next Great Escape.
        </h3>
        <button type="button" className='button'>
        <a className='book-btn' href="tel:+2348027373385">Book Now <CgArrowRight /></a>
        </button>
        </div>
       
      </div>
        </section>
 
    )
}

export default Book