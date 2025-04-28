import { useEffect, useState } from "react"
import { Table } from "../../components/Table";
import { Header } from "../../components/Table/Header";
import { getInventories } from "../../services/inventories";
import { Inventory } from "../../types/inventories";

export const Inventories = () => {
  const [data, setData] = useState<Inventory[]>([]);

  const getAllInventories = () => {
    getInventories().then((resp) => {
      setData(resp);
    });
  }

  useEffect(() => {
    getAllInventories();
  }, [])

  return (
    <>
      <div className="container mt-4">
        <h1>Inventarios</h1>
        <br/>
        <Table>
          <thead>
            <tr>
              <Header title="Codigo Producto" />
              <Header title="Nombre Producto" />
              <Header title="Cantidad" />
              <Header title="Fecha Actualizacion"/>
              <Header title="Modelo"/>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item: Inventory) => (
                <tr key={item.id}>
                  <td>{item.productCode}</td>
                  <td>{item.productName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.lastUpdated}</td>
                  <td>{item.product?.modelo}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}
