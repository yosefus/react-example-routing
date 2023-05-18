export default function Btns({ handleFilter }) {

   return (
      <div className='btn-holder'>
         <button onClick={() => handleFilter('Animal')} >Animal</button>
         <button onClick={() => handleFilter('Food')}>Food</button>
         <button onClick={() => handleFilter('All')} >All</button>
      </div>
   )
}
