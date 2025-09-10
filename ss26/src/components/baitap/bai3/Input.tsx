import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function Input() {
    const [,setSearchParams] = useSearchParams();
    const [inputValue,setInputValue] = useState("");


    const handleSearch = () =>{
        setSearchParams({inputName:inputValue});
    }
  return (
    <div>
      <input type="text" 
      placeholder='nhap ten' 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleSearch}>Tim kiem</button>
    </div>
  )
}

export default Input
