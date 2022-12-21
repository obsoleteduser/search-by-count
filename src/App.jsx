
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [visibility, setVisibility] = useState(true)
  const [filteredData, setFilteredData] = useState([])
  const [number, setNumber] = useState(5)

  useEffect(() => {
    fetch('https://northwind.now.sh/api/categories')
      .then(response => response.json())
      .then(data => setData(data))
      .then(viewData)
  }, [number])


  const handler = (event) => {
    setNumber(event.target.value)
  }

  const viewData = ()=>{
    setFilteredData([...data].filter((_, index) => {
      return index < number
    }))
  }

  return (
    <div className="App">
      <h1>Fetch Data</h1>
     <div className="controller">
     <input onChange={handler} type="number" name="" id="" min={0} max={7}/>
      <button onClick={() => { setVisibility(true) 
      viewData()
      }}>GET</button>
     </div>
      <ul className='data'>
          {filteredData.map(item => {
            return(
              <li key={item.id}>{item.name}</li>
            )
          })}
      </ul>
    </div>
  )
}

export default App
