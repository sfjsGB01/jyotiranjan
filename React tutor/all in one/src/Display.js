import React from 'react'

import Category from './Category'
import Product from './Product'

function Display() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {productData.map((cataegory,index)=>{
          return(
            <React.Fragment key={index}>
              <Category title={cataegory.categoryName} />
              
              {cataegory.products.map((product,j)=>{
                console.log(product.name);
                return(<Product key={j} name={product.name} price={product.price} />)
              })}
            </React.Fragment>
          )
        })}
        
      </tbody>
    </table>
  )
}

export default Display

const productData = [
  {
    categoryName: 'Sporting Goods',
    products: [
      {
        name: 'Football',
        price: 45,
      },
      {
        name: 'Baseball',
        price: 60,
      },
      {
        name: 'Basketball',
        price: 40,
      },
    ],
  },
  {
    categoryName: 'Electronics',
    products: [
      {
        name: 'iPhone',
        price: 4500,
      },
      {
        name: 'iPad',
        price: 1005,
      },
      {
        name: 'Laptop',
        price: 2546,
      },
    ],
  },
]
