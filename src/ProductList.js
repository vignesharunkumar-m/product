import { connect } from 'react-redux';
// import { fetchProducts } from './actions/productActions';
import { fetchProducts } from './productActions';
import { useEffect } from 'react';

const ProductList = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const { loading, products, error } = props;

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  return (
    <div>
      {products?.category_list?.map(
        (product,i) => {
          return (
            <div>
              <div key={i}>
              <p>{product.name}</p>
              <p>{product.category_id}</p>
              <img src={product.img_path}></img>
              </div>
            </div>
          );
        }

        // <p key={i}>{ele.name}</p>
        // <img src={ele.img_path}></img>
      )}
    </div>


    // <div>
    //   {products.category_list.map((product) => (
    //     <div key={product.category_id}>{product.name}</div>
    //   ))}
    //   {/* Render pagination component */}
    // </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  products: state.products,
//   error: state.error,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
