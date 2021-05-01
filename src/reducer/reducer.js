export const initialState = {
  productStore: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_STORE":
      return {
        ...state,
        productStore: [...state.productStore, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
