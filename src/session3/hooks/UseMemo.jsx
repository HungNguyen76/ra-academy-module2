import React, { useState, useMemo } from 'react'

export default function UseMemo() {
  const [name, setName] = useState("")
  // console.log("🚀 ~ file: UseMemo.jsx:5 ~ UseMemo ~ name:", name)
  const [price, setPrice] = useState("")
  // console.log("🚀 ~ file: UseMemo.jsx:7 ~ UseMemo ~ price:", price)
  const [product, setProduct] = useState([])
  
  
  const handleCalculate = () => {
    setProduct([...product, {
      name,
      price: +price
    }])
  }
  const total = useMemo(() => {
    const result = product.reduce((res, prod) => {
      return res + prod.price
    }, 0)
    return result
  }, [product]);
  
  return (
    <>
      <input placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
      <input placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)}/>
      <button onClick={handleCalculate}>Add</button>
      <p>Total: {total}</p>
      <ul>
        {product.map((item, index) => <li>{`${item.name} - ${item.price}`}</li>)}
      </ul>
    </>
  )
}
