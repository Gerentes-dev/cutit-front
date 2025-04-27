import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../cutit/pages/Home'
import { Tools } from '../cutit/pages/Tools'
import { Customers } from '../cutit/pages/Customers'
import { Navbar } from '../ui'
import { Products } from '../cutit/pages/Products'

export const AppRouter = () => {
   return (
      <>
      <Navbar />
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/" element={<Navigate to="/" />} />
         </Routes>
      </>
   )
}