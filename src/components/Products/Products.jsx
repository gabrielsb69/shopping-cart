import fetchProducts from '../../api/fetchProducts';
import './Products.css'
import { useState, useEffect } from 'react';

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    })
  }, [])

  console.log(products)


  return ( 
    <section className="products container">
      {
        products.map((product) => <p key={product.title}>{product.title}</p>)
      }
    </section>
   );
}

export default Products;