import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addInventory } from '../../services/inventories';
import { useEffect } from 'react';
import { Product } from '../../types/products';
import { useProducts } from '../../hooks/useProducts';

export const InventoryForm = () => {

  const { products, getProducts } = useProducts();

  useEffect(() => {

    getProducts();

  }, [])

  return (
    <div className="container mt-5">
      <h1>Agregar stock</h1>
      <Formik
        initialValues={{ 
          quantity: 0,
          productId: ''
        }}
        validate={values => {
          const errors: Partial<any> = {};
    
          // Validaciones para todos los campos
          if (!values.quantity) {
            errors.quantity = 'Cantidad incorrecta';
          }
    
          if (!values.productId) {
            errors.productId = 'Debe seleccionar un producto';
          }
    
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addInventory(values.productId, values.quantity).then((resp) => {
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
          <Form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="productId" className="form-label">Productos</label>
              <Field as="select" name="productId" className="form-select">
                <option value="">Selecciona un producto</option>
                {products.map((option: Product) => (
                  <option key={option.id} value={option.id}>
                    {option.description}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="productId" component="div" className="text-danger mt-1" />
            </div>

            <div className="col-md-6">
              <label htmlFor="quantity" className="form-label">Cantidad</label>
              <Field type="number" name="quantity" className="form-control" />
              <ErrorMessage name="quantity" component="div" className="text-danger mt-1" />
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
