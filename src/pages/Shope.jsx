import React from 'react'
import stockList from '../assets/stock.json'
import { useState } from 'react'
import Btns from '../components/Btns'
import Item from '../components/Item'

export default function Shope() {
   const [fromServer, setfromServer] = useState(stockList)

   const [filterBy, setFilterBy] = useState('All')
   const [filterByInStock, setFilterByInStock] = useState(10)

   // const [list, setList] = useState(stockList)
   // const handleFilter = (type) =>setList(stockList.filter(it => it.category === type))
   // const handleReset = () => setList(stockList)

   const listFilterBy = filterBy === 'All' ? fromServer : fromServer.filter(it => it.category === filterBy)

   const listByInStock = listFilterBy.filter(it => it.inStock >= filterByInStock)

   const handleFilter = (by) => setFilterBy(by)

   return (
      <div>
         {/* TODO - add function */}

         <Btns handleFilter={handleFilter} />
         <ul className='list'>
            {listByInStock.map(item => <Item
               emoji={item.emoji}
               id={item.id}
               name={item.name}
               inStock={item.inStock}
               price={item.price}
               key={item.id}
            />

            )}
         </ul>
      </div>
   )
}
