import { useEffect, useState } from "react"
import { Table } from "../../components/Table";
import { Product, ProductCategoryRequest } from "../../types/products";
import { Header } from "../../components/Table/Header";
import { useProducts } from "../../hooks/useProducts";
import { Filters } from "./Filters";

export const Products = () => {
  const [filter, setFilter] = useState<ProductCategoryRequest>({
    category: '',
    minPrice: '',
    maxPrice: '',
    stockAvailable: false,
  })
  const { products, getProducts, getProductsWithFilter } = useProducts();
  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFilter = async () => {
    await getProductsWithFilter(filter);
 }

  return (
    <div className="mt-2">
      <Filters setFilter={setFilter} filter={filter}/>
      <div className="d-flex flex-row gap-2 mb-2">
            <button type="button" className="btn btn-primary col-2" onClick={onFilter}>Filtrar</button>
         </div>
      <Table>
        <thead>
          <tr>
            <Header title="Codigo" />
            <Header title="Descripcion" />
            <Header title="Valor Bruto" />
            <Header title="IVA" />
            <Header title="Valor Venta" />
            <Header title="Color" />
            <Header title="Modelo" />
            <Header title="Categoria" />
            <Header title="Fecha Creación" />
            <Header title="Imagen" />
            <Header title="Materiales" />
            <Header title="Funciones" />
            <Header title="Revision" />
            <Header title="Relacionados" />
            <Header title="Piva" />
          </tr>
        </thead>
        <tbody>
          {
            products?.map((item: Product) => (
              <tr key={item.id}>
                <td>{item.code}</td>
                <td>{item.description}</td>
                <td>{item.vlrBruto}</td>
                <td>{item.iva}</td>
                <td>{item.vlrVenta}</td>
                <td>{item.color}</td>
                <td>{item.modelo}</td>
                <td>{item.category}</td>
                <td>{item.createdAt}</td>
                <td><img src={item.imageUrl} alt="Sierra" /></td>
                <td>{item.materials}</td>
                <td>{item.functionalities}</td>
                <td>{item.reviews}</td>
                <td>{item.relatedProducts}</td>
                <td>{item.piva}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
