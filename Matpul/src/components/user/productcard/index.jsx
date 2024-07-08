import React from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";

function ProductCard({ title, price, quantity, total, discountPercentage, discountedTotal, thumbnail }) {
    return (
        <div className='product'>
            <div className="icons">
                <BsCartPlusFill />
                <BsCartDashFill />
                <MdFavoriteBorder />
                <FaCodeCompare />
            </div>
            <img src={thumbnail} alt={title} />
            <h3 title={title}>{title} {discountPercentage}/{discountedTotal} {quantity}</h3>
            <p>{price} AZN</p>
        </div>
    )
}

export default ProductCard