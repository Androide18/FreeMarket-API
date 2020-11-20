import React, { useState } from 'react'
import Cards from './Cards'
import Spinner from './Spinner'
import { useSelector } from 'react-redux'
import Filters from './Filters'
import NotFound from './NotFound'
import Pagination from './Pagination'

const CardsGrid = () => {

    const search = useSelector((state) => state.search);
    const { loading, error, filterItems } = search

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [prodsPerPage] = useState(8);

    // Get current prods
    const indexOfLastProd = currentPage * prodsPerPage;
    const indexOfFirstProd = indexOfLastProd - prodsPerPage;
    const currentProds = filterItems.slice(indexOfFirstProd, indexOfLastProd);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return loading ? (
        <Spinner />
    ) :
        error ? (
            <span>{error}</span>
        ) :
            !filterItems.length ? (
                <div><Filters />
                    <NotFound />
                </div>
            ) :
                (
                    <div className='main'>
                        <Filters />

                        <div className="current" >
                            <span>Page N°{currentPage}</span>
                        </div>

                        <section className="cards-grid">
                            {currentProds.map(product => (
                                <Cards key={product.id} product={product} />
                            ))}
                        </section>

                        <Pagination
                            prodsPerPage={prodsPerPage}
                            totalProds={filterItems.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>

                )
}

export default CardsGrid
