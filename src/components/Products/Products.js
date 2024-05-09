import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = (props) => {
  const [products]  = useState(productsData);

  return (
    <section>
        {products.map(products => <Product {...products} key={products.id}/>)}     
    </section>
  );
};

export default Products;