import React, { useState } from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import './Card.css'


const CardItem = ({ elem, setAddItemList,addItemList }) => {
  const [val, setVal] = useState(0)


  const addItemHandle = () => {
    setAddItemList(prev => [...prev, elem])
    setVal(prev => prev + 1)
  }


  const removeItemHandle =()=>{
  setVal(prev=> prev - 1)
  let newAddItemList = addItemList
 let filterData1 =  newAddItemList.filter((item)=>item.id == elem.id)
 filterData1.shift()
 let filterData2 =  newAddItemList.filter((item)=>item.id != elem.id)
 setAddItemList([...filterData1,...filterData2]) 
  }


  return (

    <Card >
      <Card.Img variant="top" src={elem.images[0]} />
      <Card.Body>
        <Card.Title>{elem.brand}</Card.Title>
        <Card.Text>
          {elem.description}
        </Card.Text>
        <div>
          <span>$ {elem.price}    </span>
          {val == 0 && <Button className='add_item_btn' onClick={addItemHandle} variant="secondary" > Add </Button>}

          {val != 0 && <ButtonGroup aria-label="Basic example">
            <Button className='add_item_btn' variant="secondary" onClick={removeItemHandle}>-</Button>
            <Button className='add_item_btn' variant="secondary">{val}</Button>
            <Button className='add_item_btn' onClick={addItemHandle} variant="secondary">+</Button>
          </ButtonGroup>}

        </div>
      </Card.Body>
    </Card>


  )
}

export default CardItem
