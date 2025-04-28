import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addCustomer } from '../../services/customers';

export const CustomerForm = () => {
  return (
    <div className="container mt-5">
      <h1>Crear cliente</h1>
      <Formik
        initialValues={{ 
          documentNumber: '',
          documentType: '',
          firstName: '', 
          lastName: '',
          email: '',
          phoneNumber: '',
          address:'',
          city:'' 
        }}
        validate={values => {
          const errors: Partial<any> = {};
    
          // Validaciones para todos los campos
          if (!values.documentNumber) {
            errors.documentNumber = 'Número de documento es obligatorio';
          }
    
          if (!values.firstName) {
            errors.firstName = 'Primer nombre es obligatorio';
          }
    
          if (!values.lastName) {
            errors.lastName = 'Apellido es obligatorio';
          }
    
          if (!values.email) {
            errors.email = 'Correo es obligatorio';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Dirección de correo electrónico inválida';
          }
    
          if (!values.phoneNumber) {
            errors.phoneNumber = 'Número de teléfono es obligatorio';
          } else if (!/^\d{10}$/.test(values.phoneNumber)) {
            errors.phoneNumber = 'Número de teléfono debe tener 10 dígitos';
          }
    
          if (!values.address) {
            errors.address = 'Dirección es obligatoria';
          }
    
          if (!values.city) {
            errors.city = 'Ciudad es obligatoria';
          }
    
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
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
            // Aquí puedes limpiar los campos después de guardar la data
            resetForm();
          });

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
