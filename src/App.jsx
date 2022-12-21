
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [visibility, setVisibility] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch('https://northwind.now.sh/api/categories')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])


  const handler = (event) => {
    setFilteredData([...data].filter((_, index) => {
      return index < event.target.value
    }))
  }


  return (
    <div className="App">
     <div className="controller">
     <input onChange={handler} type="number" name="" id="" />
      <button onClick={() => { setVisibility(!visibility) }}>GET</button>
     </div>
      <ul className='data'>
          {visibility && filteredData.map(item => {
            return(
              <li key={item.id}>{item.name}</li>
            )
          })}
      </ul>
    </div>
  )
}

export default App
