import React from 'react'

const Cards = ({ product }) => {

    return (
        <div className='cards-container'>
            <div className='cards-container-inner'>
                <div className='img-container'>
                    <a href={product.link} target='_blank' rel="noreferrer">
                        <img id='img-card' src={product.image} alt="" />
                    </a>
                </div>
                <div className="card-content-box">
                    <h1 className='card-name'> {product.title} </h1>
                    <div className='card-price'> $AR {product.price} </div>
                    <div className='card-condition'> {product.condition} </div>
                    <div className='card-stock'> stock: {product.stock} </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
