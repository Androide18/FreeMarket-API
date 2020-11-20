import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProduct } from "../redux/actions/searchActions";
import 'font-awesome/css/font-awesome.min.css';

const SearchBar = () => {

    const [product_name, set_product_name] = useState('')
    const dispatch = useDispatch();

    return (
        <div className="container">
            <input
                type='search'
                name='query'
                value={product_name}
                placeholder="Find product..."
                onChange={
                    (event) => {
                        set_product_name(event.target.value);
                    }
                }
            />
            <Link className='link' to='/search'>
                <i className="fa fa-search btn"
                    type='submit'
                    value='Buscar'
                    onClick={() => { dispatch(fetchProduct(product_name)) }}
                >
                </i>
            </Link>
        </div>
    )
}

export default SearchBar;


