import { Route, Routes } from "react-router-dom"
import Home from './components/Home.js'
import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios('https://fakestoreapi.com/products')
        if (res.status === 200) {
          setData(res.data)
          console.log(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
      </Routes>
    </div>
  )
}

export default App