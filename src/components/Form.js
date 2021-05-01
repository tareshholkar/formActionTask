import React, { Component } from "react";
import FormData from "./FormData";

class Form extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.state = {
      product: {
        name: "",
        product: "",
        desc: "",
        expDate: "",
        costP: "",
        sellP: "",
        discountP: "",
      },
    };
  }
  deleteProduct = () => {};
  editProduct = () => {};
  handleSubmit = (e) => {
    e.preventDefault();
    this.childRef.current.handleParentSubmit();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product</th>
                <th>Description</th>
                <th>Expiry Date</th>
                <th>Cost Price</th>
                <th>Selling Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(event) =>
                      this.setState({
                        product: {
                          ...this.state.product,
                          name: event.target.value,
                        },
                      })
                    }
                  />
                </td>
                <td>
                  <select
                    value={this.state.value}
                    onChange={(event) =>
                      this.setState({
                        product: {
                          ...this.state.product,
                          product: event.target.value,
                        },
                      })
                    }
                  >
                    <option value="Product 1">Product 1</option>
                    <option value="Product 2">Product 2</option>
                    <option value="Product 3">Product 3</option>
                    <option value="Product 4">Product 4</option>
                    <option value="Product 5">Product 5</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Desctiption"
                    onChange={(event) =>
                      this.setState({
                        product: {
                          ...this.state.product,
                          desc: event.target.value,
                        },
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="date"
                    placeholder="Pick A Date"
                    min="2021-05-1"
                    onChange={(event) =>
                      this.setState({
                        product: {
                          ...this.state.product,
                          expDate: event.target.value,
                        },
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(event) =>
                      this.setState({
                        product: {
                          ...this.state.product,
                          costP: event.target.value,
                        },
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(event) =>
                      this.setState({
                        product: {
                          ...this.state.product,
                          sellP: event.target.value,
                        },
                      })
                    }
                  />
                </td>
                <td>
                  <button onClick={this.deleteProduct}>Delete</button>
                  <button onClick={this.editProduct}>Edit</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <FormData ref={this.childRef} product={this.state.product} />
      </div>
    );
  }
}

export default Form;
