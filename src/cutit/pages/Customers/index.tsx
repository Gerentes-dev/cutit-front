import { useEffect, useState } from "react"
import { Customer } from "../../types/customers";
import { getCustomers, getCustomersByDocument, getCustomersByName } from "../../services/customers";
import { Table } from "../../components/Table";
import { Header } from "../../components/Table/Header";

export const Customers = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [filterOptions, setFilterOptions] = useState<{ id: string }[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState('');

  const getAllCustoemrs = () => {
    getCustomers().then((resp) => {
      setData(resp);
    });
  }

  const onFilter = async () => {
    if (selectedOption === 'Nombre') {
      getCustomersByName(filter).then((resp) => {
        setData([resp])
      })
      setFilterActive(true)
    } else if (selectedOption === 'Documento') {
      getCustomersByDocument(filter).then((resp) => {
        setData([resp])
      })
      setFilterActive(true)
    }
  };

  const onReset = async () => {
    setFilterActive(false)
    setFilter('')
    getAllCustoemrs()
  };

  useEffect(() => {
    setFilterOptions([
      {id: 'Nombre'},
      {id: 'Documento'}
    ])

    setSelectedOption('Nombre');

    getAllCustoemrs();
  }, [])

  return (
    <>
      <div className="container mt-4">
        <h1>Customers</h1>
        <div>
          <h5>Filtro</h5>
          <div className="d-flex flex-row gap-2 mb-2">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="form-select form-select-sm"
              style={{ width: '120px' }}
            >
              {filterOptions?.map(({id}) => (
                <option key={id} value={id} >
                  {id}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Buscar..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-control form-control-sm"
              style={{ width: '200px' }}
            />
            <button type="button" className="btn btn-primary col-2" onClick={onFilter}>Filtrar</button>
            {
              filterActive &&
              <button type="button" className="btn btn-primary col-2" onClick={onReset}>Resetear</button>
            }
          </div>
        </div>
        <br/>
        <Table>
          <thead>
            <tr>
              <Header title="Nombre" />
              <Header title="Apellido" />
              <Header title="Tipo Documento" />
              <Header title="Numero Documento"/>
              <Header title="Correo"/>
              <Header title="Numero Telefono"/>
              <Header title="Direccion"/>
              <Header title="Ciudad"/>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item: Customer) => (
                <tr key={item.id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.documentType}</td>
                  <td>{item.documentNumber}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}
