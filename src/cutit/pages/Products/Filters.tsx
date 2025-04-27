import { ProductCategoryRequest } from "../../types/products";

interface FilterProps {
   filter: ProductCategoryRequest;
   setFilter: React.Dispatch<React.SetStateAction<ProductCategoryRequest>>;
}
export const Filters = ({filter, setFilter}: FilterProps) => {
     
   const onChange = (category: string, value: string | boolean) => {
      setFilter({
         ...filter,
         [category]: value,
      })
   }

   return (
      <>
         <div className="d-flex flex-row gap-2 mb-2">
            <input
               type="text"
               placeholder="Categoria..."
               value={filter.category}
               onChange={(e) => onChange('category', e.target.value)}
               className="form-control form-control-sm"
               style={{ width: '200px' }}
            />
            <input
               type="number"
               placeholder="Precio minimo..."
               value={filter.minPrice}
               onChange={(e) => onChange('minPrice', e.target.value)}
               className="form-control form-control-sm"
               style={{ width: '200px' }}
            />
            <input
               type="text"
               placeholder="Precio Maximo..."
               value={filter.maxPrice}
               onChange={(e) => onChange('maxPrice', e.target.value)}
               className="form-control form-control-sm"
               style={{ width: '200px' }}
            />
            <div className="form-check form-switch align-self-center">
               <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onChange={(e) => onChange('stockAvailable', e.target.checked)}
               />
               <label className="form-check-label">Stock Disponible</label>
            </div>
         </div>

      </>
   )
}
