import { useEffect, useState } from "react"
import { getProduct } from "../../services";
import { Table } from "../../components/Table";
import { Product, ProductCategoryRequest } from "../../types/products";
import { Header } from "../../components/Table/Header";
import { useProducts } from "../../hooks/useProducts";

export const Home = () => {
  const [data, setData] = useState<Product[]>([]);
  const categories = ['1', '2', '3'];
  const filter: ProductCategoryRequest = {
    category: '',
    minPrice: '',
    maxPrice: '',
    stockAvailable: false,
  }
  const { products, getProductWithFilter } = useProducts();

  useEffect(() => {
    getProduct().then((resp) => {
      setData(resp)
    });

  }, [])

  const onFilter = async (category: string, value: string) => {
    const productCategoryRequest = {
      ...filter,
      [category]: value,
    }
    // await getProductWithFilter(productCategoryRequest);
  }

  return (
    <Table hasSearch>
      <thead>
        <tr>
          <Header title="Nombre" />
          <Header title="Descripcion" />
          <Header title="Cantidad" />
          <Header title="Tipo" searchFilter callback={onFilter}/>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item: Product) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.type}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}
