import { Formik, Form, Field,  ErrorMessage } from 'formik';
import { addCustomer } from '../../services/customers';

export const CustomerForm = () => {
    return (
        <div>
        <h1>Crear cliente</h1>
        <Formik
          initialValues={{ documentNumber: '', documentType: '', lastName: '',email: '',phoneNumber: '',address:'',city:'' }}
          validate={values => {
          /*  const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;*/
          }}
          onSubmit={(values, { setSubmitting }) => {
             addCustomer({ 
              'documentNumber': values.documentNumber,
              'documentType':'CC',
              'firstName': values.firstName,
              'lastName': values.lastName,
              'email': values.email,
              'phoneNumber': values.phoneNumber,
              'address': values.address,
              'city': values.city
            }).then((resp) => {
                  console.log(resp);
                });
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className='container'> 
              <div className="mb-3">
                <label className="form-label">Numero de documento</label>
                <Field type="text" name="documentNumber" />
                <ErrorMessage name="documentNumber" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Primer Nombre</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Apellido</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Numero de telefono</label>
                <Field type="number" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Direccion</label>
                <Field type="text" name="address" />
                <ErrorMessage name="address" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Ciudad</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
  