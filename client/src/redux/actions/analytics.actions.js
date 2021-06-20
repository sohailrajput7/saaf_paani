import { createAction } from "../../utils/reduxHelper";
import * as actions from "../types/analytics.types";

export const getDashboardStatsStart = createAction(
  actions.GET_DASHBOARD_STATS_START
);
export const getDashboardStatsSuccess = createAction(
  actions.GET_DASHBOARD_STATS_SUCCESS
);
export const getDashboardStatsError = createAction(
  actions.GET_DASHBOARD_STATS_ERROR
);
