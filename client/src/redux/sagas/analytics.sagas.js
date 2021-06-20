import axios from "../../api/axios";
import * as actionTypes from "../types/analytics.types";
import * as actions from "../actions/analytics.actions";
import { all, fork, put, takeLatest } from "redux-saga/effects";

function* getDashboardAnalyticsAsync(action) {
  try {
    const response = yield axios.get("analytics/get-dashboard-stats");
    yield put(actions.getDashboardStatsSuccess(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetDashboardAnalytics() {
  yield takeLatest(
    actionTypes.GET_DASHBOARD_STATS_START,
    getDashboardAnalyticsAsync
  );
}

function* analyticsSagas() {
  yield all([fork(watchGetDashboardAnalytics)]);
}

export default analyticsSagas;
