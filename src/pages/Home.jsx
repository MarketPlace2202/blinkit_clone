import React, { useEffect, useState } from 'react'
import CardItem from '../component/card/CardItem'
import './pages.css'





const Home = ({setAddItemList, addItemList, searchTerm }) => {
  const [productData, setProductData] = useState([])



  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProductData(data?.products));
  }, [])

 
  console.log('productData',productData);
  
  const filteredProducts = productData.filter(product =>
    product.brand?.toLowerCase().includes((searchTerm || '').toLowerCase())
  )



  return (
    <div className='card_item_con'>
    {filteredProducts.map((elem) => (
      <div key={elem.id} className='card_item'>
        <CardItem elem={elem} setAddItemList={setAddItemList} addItemList={addItemList} />
      </div>
    ))}
  </div>
  )
}

export default Home
