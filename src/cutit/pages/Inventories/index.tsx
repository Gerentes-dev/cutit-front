import { useEffect, useState } from "react"
import { Table } from "../../components/Table";
import { Header } from "../../components/Table/Header";
import { getInventories } from "../../services/inventories";
import { Inventory } from "../../types/inventories";
import { useNavigate } from "react-router-dom";

export const Inventories = () => {
  const [data, setData] = useState<Inventory[]>([]);
  const navigate = useNavigate();

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
        <div className="d-flex flex-row gap-2 flex-end" style={{ width: '100%' }}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                style={{ width: '100px', marginLeft: 'auto' }}
                onClick={() => navigate(`/inventories/create`)}
              >
                Crear
              </button>
            </div>
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
