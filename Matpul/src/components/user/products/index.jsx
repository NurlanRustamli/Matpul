import React, { useEffect, useState } from 'react'
import { productsApi } from '../../../services/base'
import ProductCard from '../productcard'

function Products() {
    const [products,setProducts] = useState([])
    useEffect(()=>{
    productsApi.getAllProduct().then(data=>setProducts(data),[])
    })
  return (
    <section id='products'>
        <div className='container'>
            <div className="row">
                <div className=" section-heading  col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 text-center">
                <p className='subheading'>Ürəyin istəyin məhsulu seç sonrada pulunu ver</p>
                <h2>Məhsullar</h2>
                </div>
                
            </div>
            <div className="row">
            {
            products.map(item=><div className='col-lg-3 col-xl-3 col-md-4 col-sm-6 col-xs-6' key={item.id}>
                <ProductCard {...item} />
            </div>)
        }
            </div>
        
    </div>
    </section>
  )
}

export default Products