
export default function Item({ id, name, emoji, price, inStock }) {
   return (
      <li >
         <h2>{name}</h2>
         <p className='avatar'>{emoji}</p>
         <p>{price} $</p>
         {inStock ?
            <p>in stock: {inStock}</p> :
            <p className='error'>nothing here...</p>
         }
      </li>
   )
}
