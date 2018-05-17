  // src/components/ProductList.js
  import React, {Component} from 'react';
  import Product from './Product';

  class ProductList extends Component {


    render() {
        const productList = this.props.productList;
        const addNewProductToProductList=this.props.addNewProductToProductList;
        const deleteProductFromProductList = this.props.deleteProductFromProductList;
        const productComponents = productList.map((product, index) => {
            return <Product
                {...product}
                key={index}
                index={index}
                addNewProductToProductList={addNewProductToProductList}
                deleteProduct={deleteProductFromProductList}/>
            });

      return (
          <div>
            { productComponents }
          </div>
      )

    }
  }

  export default ProductList;