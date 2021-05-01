import React from "react";

function ProductsDisplay({ each }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{each.product.name}</td>
            <td>{each.product.product}</td>
            <td>{each.product.desc}</td>
            <td>{each.product.expDate}</td>
            <td>{each.product.costP}</td>
            <td>{each.product.sellP}</td>
            <td>{each.product.discountP}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductsDisplay;
