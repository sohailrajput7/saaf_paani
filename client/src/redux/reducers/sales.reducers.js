import produce from "immer";
import * as actions from "../types/sales.types";

const initialState = {
  isLoading: false,
  data: [],
};

const salesReducer = produce((draft, action) => {
  switch (action.type) {
    case actions.GET_ALL_SUPPLIER_SALES_START:
      draft.isLoading = true;
      break;

    case actions.GET_ALL_SUPPLIER_SALES_SUCCESS:
      draft.isLoading = false;
      draft.data = action.payload;
      break;
  }
}, initialState);

export default salesReducer;
