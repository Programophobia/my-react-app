import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import Image from './image.js';
import Form from './form.js';

const Product = props => {
 const [currentColor, setCurrentColor] = useState(props.colors[0]);
 const [currentSize, setCurrentSize] = useState(props.sizes[0]);

 




  return (
    <article className={styles.product}>
      <Image name={props.name} currentColor={currentColor}/>
      <Form sizes={props.sizes} colors={props.colors}
        title={props.title} basePrice={props.basePrice} currentColor={currentColor} currentSize={currentSize}
        setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize}/>
    </article>
  )
};

export default Product;