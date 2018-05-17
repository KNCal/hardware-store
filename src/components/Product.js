  // src/components/Product.js

  import React, {Component} from 'react';

  class Product extends Component {


    deleteProd = () => {
        this.props.deleteProduct(this.props.index)
    };


    showOptions = () => {
        const viewMode = this.props.viewMode
    
        const adminOptions = (
          <div>
            <button onClick={this.deleteProduct}>Delete</button>
          </div>
        )
        const shopOptions = (
          <div>
            <button onClick={this.addToCart}>Add To Cart</button>
          </div>
        )

        switch (viewMode) {
          case 'ADMIN':
            return adminOptions
          case 'SHOP':
            return shopOptions
          default:
            return null
        }
      };

    render() {

      return (
        <div> 
            <div>
                <h3>{this.props.productName}</h3>
                <div>{this.props.description}</div>
                <div>{this.props.price}</div>
            </div>
            <div>
                <button onClick={this.deleteProd}>Delete</button>
            </div>
        </div>
      )  
    } 
  }

  export default Product;