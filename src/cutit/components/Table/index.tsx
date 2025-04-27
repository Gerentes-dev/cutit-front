import React, { useState } from 'react'

interface TableProps {
   children: React.ReactNode,
   hasSearch?: boolean
}
export const Table = ({ children, hasSearch }: TableProps) => {
   const [searchTerm, setSearchTerm] = useState('');

   return (
      <div>
         {
            hasSearch && (
               <div className="d-flex justify-content-end mb-2">
                  <input
                     type="text"
                     placeholder="Buscar..."
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     className="form-control form-control-sm"
                     style={{ width: '200px' }}
                  />
               </div>
            )
         }
         <table className="table table-dark table-striped table-hover table-bordered">
            {children}
         </table>
      </div>
   )
}
