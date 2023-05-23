import { connect } from 'react-redux';
import { useEffect } from 'react';
// import { fetchProductDetails } from './productActions';
import { fetchProductDetails } from './productActions';


const ProductDetails = (props) => {
  useEffect(() => {
    props.fetchProductDetails(props.productId);
  }, [props.productId]);

  const { loading, product, error } = props;

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  return (
    <div>
      <h2>{product.name}</h2>
      {/* <p>{product.description}</p> */}
      {/* Render other details */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  product: state.product,
//   error: state.error,
});

export default connect(mapStateToProps, { fetchProductDetails })(ProductDetails);
