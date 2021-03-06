const   models = require('../models')
        IndigenousLand = models.de_terra_indigena_sema
        logger = require('../utils/logger')

exports.getAll = async (req, res) => {

    try {
        res.json(await IndigenousLand.findAll());
    } catch (e) {
      const msgErr = `In indigenous-land.controller, method getAll:${e}`;
      logger.error(msgErr);
      res.json(msgErr);
    }
};

exports.getAllSimplified = async (req, res) => {
    const options = {
      attributes: [
        'gid',
        ['nome', 'name'],
        'nome_ti_a1'
      ],
      order: [
        ['name']
      ]
    };
    try {
        res.json(await IndigenousLand.findAll(options));
    } catch (e) {
      const msgErr = `In indigenous-land.controller, method getAllSimplified:${e}`;
      logger.error(msgErr);
      res.json(msgErr);
    }
};
