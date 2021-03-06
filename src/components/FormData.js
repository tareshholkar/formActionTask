import React, { useImperativeHandle } from "react";
import { useStateValue } from "../StateProvider";
import ProductsDisplay from "./ProductsDisplay";

const FormData = React.forwardRef(({ product }, ref) => {
  const [{ productStore }, dispatch] = useStateValue();

  useImperativeHandle(ref, () => ({
    handleParentSubmit() {
      // Dispatch the item into data layer
      dispatch({
        type: "ADD_TO_STORE",
        item: {
          product: { ...product },
        },
      });
    },
  }));
  return (
    <React.Fragment>
      {productStore.map((value) => {
        console.log(value);
        return <ProductsDisplay each={value} />;
      })}
    </React.Fragment>
  );
});

export default FormData;
