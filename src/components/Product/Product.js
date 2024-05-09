import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = props => {
 const [currentColor, setCurrentColor] = useState(props.colors[0]);
 const [currentSize, setCurrentSize] = useState(props.sizes[0]);

 const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}

const getPrice = (basePrice, currentSize) => {
  return basePrice + currentSize.additionalPrice;
}

const sentOrder = (event, title, basePrice, currentSize, currentColor) => {
  event.preventDefault();
  console.log(`
    Name: ${title}
    Price: ${getPrice(basePrice, currentSize)}
    Size: ${currentSize.name}
    Color: ${currentColor}
  `);
  setCurrentColor(props.colors[0]);
  setCurrentSize(props.sizes[0]);
};
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, currentSize)}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel} alt={props.names}>Sizes</h3>
            <ul className={styles.choices}>
             {props.sizes.map(size => <li><button type="button" key={size.name} className={clsx(size===currentSize&&styles.active)} onClick={()=>setCurrentSize(size)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map( color => <li><button  key={color} onClick={()=>setCurrentColor(color)} type="button" className={clsx(prepareColorClassName(color), color===currentColor&&styles.active)} /></li>)}
              
            </ul>
          </div>
          <Button className={styles.button} onClick={ (event) => sentOrder(event, props.title, props.basePrice, currentSize, currentColor)}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;