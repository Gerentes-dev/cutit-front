import { useState } from 'react';

interface HeaderProps {
   options?: { name: string, value: string }[];
   dropdownFilter?: boolean;
   searchFilter?: boolean;
   searchId?: string;
   title: string;
   callback?: (name?: string, value?: string) => void;
}

export const Header = ({ callback,  options, searchId, title, dropdownFilter=false, searchFilter = false }: HeaderProps) => {
   const [selectedOption, setSelectedOption] = useState('');

   const handleFilterChange = async ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(target.value);
      if (callback) {
         callback(target.id, target.value);
      }
   };

   if (dropdownFilter) {
      return <th className="d-flex align-items-center gap-2">
         <span>{title}</span>
         <select
            value={selectedOption}
            onChange={(e) => handleFilterChange(e)}
            className="form-select form-select-sm"
            style={{ width: '120px' }}
         >
            <option value="">Todas</option>
            {options?.map(({name, value}) => (
               <option key={name} value={value} >
                  {value}
               </option>
            ))}
         </select>
      </th>
   }

   if (searchFilter) {
      return (
         <th className="d-flex align-items-center gap-2">
            <span>{title}</span>
            <input
               type="text"
               placeholder="Buscar..."
               className="form-control form-control-sm"
               onKeyDown={(e => {
                  if (e.key === 'Enter') {
                     if (callback) {
                        callback(searchId, (e.target as HTMLInputElement).value);
                     }
                  }
               })}
               style={{ width: '120px' }}
            />
         </th>
      )
   }

   return (
      <>
         <th>{title}</th>
      </>
   )
}
