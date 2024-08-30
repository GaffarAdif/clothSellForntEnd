let inisialState = [];

const UpdateBusketArray = (state = inisialState, action) => {
  switch (action.type) {
    case "add":
      const { productId, productSize, productColor, productQuantity } =
        action.newData;

      const proudctExistCheck = state.find(
        (item) => item.productId === productId
      );

      if (!proudctExistCheck) {
        return [...state, action.newData];
      }

    case "remove":
      return state.filter((val, indx) => indx !== action.ItemIndex);

    default:
      return state;
  }
};

export default UpdateBusketArray;
