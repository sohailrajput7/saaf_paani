const express = require("express");

const { getDashboardAnalytics } = require("../controllers/AnalyticsController");

const analyticsRoutes = express.Router();

analyticsRoutes.route("/get-dashboard-stats").get(getDashboardAnalytics);

module.exports = analyticsRoutes;
