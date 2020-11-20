import React from 'react'

const Pagination = ({ prodsPerPage, totalProds, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProds / prodsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-wrapper">
            <div className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-numbers " onClick={() => paginate(number)} >
                        <a className="page-numbers ">
                            {number}
                        </a>
                    </li>
                )
                )}
            </div>
        </div>
    )
}

export default Pagination