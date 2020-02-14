const models = require('../models');

class NCovReportService {
  async getReports() {
    return models.NcovReport.findAll({ where: {} });
  }
}

module.exports = NCovReportService;
