import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getCustomerById, updateCustomer } from '../../services/customers'; // Asegúrate de tener estas funciones
import { useParams } from 'react-router-dom'; // Import useParams

interface Customer {
  id: string;
  documentNumber: string;
  documentType: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
}

export const CustomerFormId = () => {
    const { id } = useParams<{ id: string }>(); // Retrieve id from the URL
    const [customerData, setCustomerData] = useState<Customer | null>(null);

    useEffect(() => {
        if (id) {
        const fetchCustomer = async () => {
            try {
            const response = await getCustomerById(id);
            setCustomerData(response);
            } catch (error) {
            console.error('Error fetching customer:', error);
            }
        };

        fetchCustomer();
        }
    }, [id]);
  // Si los datos del cliente no están disponibles, mostramos un mensaje de carga
  if (!customerData) {
    return <div>Cargando datos del cliente...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{customerData.id ? 'Actualizar Cliente' : 'Crear Cliente'}</h1>
      <Formik
        initialValues={{
          documentNumber: customerData.documentNumber,
          documentType: customerData.documentType,
          firstName: customerData.firstName,
          lastName: customerData.lastName,
          email: customerData.email,
          phoneNumber: customerData.phoneNumber,
          address: customerData.address,
          city: customerData.city,
        }}
        validate={values => {
          const errors: Partial<any> = {};

          if (!values.documentNumber) errors.documentNumber = 'Número de documento es obligatorio';
          if (!values.firstName) errors.firstName = 'Primer nombre es obligatorio';
          if (!values.lastName) errors.lastName = 'Apellido es obligatorio';
          if (!values.email) errors.email = 'Correo es obligatorio';
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Dirección de correo electrónico inválida';
          }
          if (!values.phoneNumber) errors.phoneNumber = 'Número de teléfono es obligatorio';
          else if (!/^\d{10}$/.test(values.phoneNumber)) {
            errors.phoneNumber = 'Número de teléfono debe tener 10 dígitos';
          }
          if (!values.address) errors.address = 'Dirección es obligatoria';
          if (!values.city) errors.city = 'Ciudad es obligatoria';

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            if (customerData.id) {
              // Si existe un ID, actualizamos el cliente
              await updateCustomer(customerData.id, values); // Aquí llamamos a la API de actualización
            }
            alert('Formulario enviado correctamente');
          } catch (error) {
            console.error('Error en la actualización del cliente:', error);
            alert('Hubo un error al enviar los datos');
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Número de documento</label>
              <Field type="text" name="documentNumber" className="form-control" />
              <ErrorMessage name="documentNumber" component="div" className="text-danger" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Primer Nombre</label>
              <Field type="text" name="firstName" className="form-control" />
              <ErrorMessage name="firstName" component="div" className="text-danger" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Apellido</label>
              <Field type="text" name="lastName" className="form-control" />
              <ErrorMessage name="lastName" component="div" className="text-danger" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Correo</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Número de teléfono</label>
              <Field type="number" name="phoneNumber" className="form-control" />
              <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Dirección</label>
              <Field type="text" name="address" className="form-control" />
              <ErrorMessage name="address" component="div" className="text-danger" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Ciudad</label>
              <Field type="text" name="city" className="form-control" />
              <ErrorMessage name="city" component="div" className="text-danger" />
            </div>

            <div className="col-12">
              <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100">
                {customerData.id ? 'Actualizar Cliente' : 'Crear Cliente'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
