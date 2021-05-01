import React from "react";

function ProductsDisplay({ each }) {
  return (
    <React.Fragment>
      <tr>
        <td>{each.product.name}</td>
        <td>{each.product.product}</td>
        <td>{each.product.desc}</td>
        <td>{each.product.expDate}</td>
        <td>{each.product.costP}</td>
        <td>{each.product.sellP}</td>
        <td>
          <button>Delete</button>
          <button>Edit</button>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default ProductsDisplay;
