'use strict';

const NCovReportService = require('../services/ncov_report');

module.exports = {
  Query: {
    ncov: (_, __, context) => {
      const service = new NCovReportService();

      return {
        reports: () => {
          return service.getReports();
        },
      };
    },
  },
};
