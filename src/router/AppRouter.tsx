import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../cutit/pages/Home'
import { Navbar } from '../ui'
import { Products } from '../cutit/pages/Products'

export const AppRouter = () => {
   return (
      <>
      <Navbar />
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Navigate to="/" />} />
         </Routes>
      </>
   )
}
