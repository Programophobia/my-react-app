import Button from "../Button/Button.js"
import styles from './Product.module.scss'
import clsx from "clsx"

const Form = (props)=>{

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }

      const sentOrder = (event, title, basePrice, currentSize, currentColor) => {
        event.preventDefault();
        console.log(`
          Name: ${title}
          Price: ${getPrice(basePrice, currentSize)}
          Size: ${currentSize.name}
          Color: ${currentColor}
        `);
        props.setCurrentColor(props.colors[0]);
        props.setCurrentSize(props.sizes[0]);
      };

      const getPrice = (basePrice, currentSize) => {
        return basePrice + currentSize.additionalPrice;
      }
return <div>
            <header>
            <h2 className={styles.name}>{props.title}</h2>
            <span className={styles.price}>Price: {getPrice(props.basePrice, props.currentSize)}</span>
            </header>
            <form>
            <div className={styles.sizes}>
                <h3 className={styles.optionLabel} alt={props.names}>Sizes</h3>
                <ul className={styles.choices}>
                {props.sizes.map(size => <li><button type="button" key={size.name} className={clsx(size===props.currentSize&&styles.active)} onClick={()=>props.setCurrentSize(size)}>{size.name}</button></li>)}
                </ul>
            </div>
            <div className={styles.colors}>
                <h3 className={styles.optionLabel}>Colors</h3>
                <ul className={styles.choices}>
                {props.colors.map( color => <li><button  key={color} onClick={()=>props.setCurrentColor(color)} type="button" className={clsx(prepareColorClassName(color), color===props.currentColor&&styles.active)} /></li>)}
                
                </ul>
          </div>
          
          <Button className={styles.button} onClick={ (event) => sentOrder(event, props.title, props.basePrice, props.currentSize, props.currentColor)}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
          }

          export default Form