import produce from "immer";
import * as actions from "../types/analytics.types";

const initialState = {
  isLoading: false,
  dashboard: {},
};

const analyticsReducer = produce((draft, action) => {
  switch (action.type) {
    case actions.GET_DASHBOARD_STATS_START:
      draft.isLoading = true;
      break;

    case actions.GET_DASHBOARD_STATS_SUCCESS:
      draft.isLoading = false;
      draft.dashboard = action.payload;
      break;
  }
}, initialState);

export default analyticsReducer;
