import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../cutit/pages/Home'
import { Tools } from '../cutit/pages/Tools'
import { Navbar } from '../ui'

export const AppRouter = () => {
   return (
      <>
      <Navbar />
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/" element={<Navigate to="/" />} />
         </Routes>
      </>
   )
}
