import React, { Component } from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView';

class HomePage extends Component {

//   constructor() {
//     super();
//     this.state = {
//       itemCurrentlyOnSale: 'A Hammer'
//       editSaleItem: true
//     };

    // old way below.  This makes it part of the class so method is bound to it.
    // New way to define it below.  This is performant and correct.  Below is easy and slows down
    //the app. The new way has Performance issues (but has cleaner code) is because you create it every
    //time you call the component.

    // this.toggleEditSaleItem = this.toggleEditSaleItem.bind(this).  Important 
    //test tool that wants to eradicate the new way.
//   }

  //The property intialization - ES7 - when I instantiate this class, take this method
  //and bind this to my class.  When you do this, do not have to do above.   IF 
  // we use this code below, can get rid of the constructor above.  And move
//   this.state code here

    state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: true,
        showAdminView: false,
        productList: [
            {
              productName: 'Hammer',
              description: 'Itsa hammer',
              price: 12.3,
            },
            {
              productName: 'Nail',
              description: 'Itsa nail',
              price: 0.12,
            }
        ]
    };

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});  //this is es7 feature.  Old feature 
                                        //this.setState({editSaleItem editSaleItem});
    };
  
    toggleAdminView = () => {
        const showAdminView = !this.state.showAdminView;
        this.setState({showAdminView});  //this is es7 feature.  Old feature 
                                        //this.setState({editSaleItem editSaleItem});
    };

    // everytime we can re-render the box by everytime you enter just one thing.  React re-renders the
    // thing that changed.  It is changed with every change is because state managment being hard.
    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({itemCurrentlyOnSale});
    };

    addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
    };

    deleteProductFromProductList = (productToDelete) => {
        const productList = [...this.state.productList];
        productList.splice(productToDelete, 1)
        this.setState({productList});
    };

      
  render() {
    const adminView = <AdminView
        productList={this.state.productList} 
        addNewProductToProductList={this.addNewProductToProductList}
        deleteProductFromProductList={this.deleteProductFromProductList}/>

    const shopView = <ShopView
        productList={this.state.productList}/>

    return (
        <div>
          <h1>My Hardware Store</h1>
          <div>
            <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
            {/* difference between toggleEditSaleItem() and toggleEditSaleItem is
            first one is called all the time, the second is only called when button is pushed */}
            <span>  
                <button onClick={this.toggleEditSaleItem}>
                    { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
                </button>
            </span>
            {/* { this.state.editSaleItem ? <div><input type="text"/></div> : null } */}

            { this.state.editSaleItem ? <div>
                <input 
                    onChange={this.handleItemCurrentlyOnSaleChange}
                    value={this.state.itemCurrentlyOnSale} 
                    type="text"/>
            </div> : null }
            <div>
              <input type="text"/>
            </div>

            <span>  
                <button onClick={this.toggleAdminView}>
                    { this.state.AdminView ? 'Shop View' : 'Admin View' }
                </button>
            </span>
          </div>

          <div>
            {this.state.showAdminView ? adminView : shopView}
          </div>

        </div>
    );
  }
}
export default HomePage;