const   models = require('../models');
        City = models.de_municipios_sema;

exports.getAll = async (req, res) => {

    try {
        res.json(await City.findAll());
    } catch (e) {
      const msgErr = `In indigenous-land.controller, method getAll:${e}`;
      console.log(msgErr);
      res.json(msgErr);
    }
};

exports.getAllSimplified = async (req, res) => {
  const options = {
    attributes: [
      'gid',
      ['municipio', 'name'],
      'id_munic',
      'geocodigo'
    ],
    order: [
      ['municipio']
    ]
  };
  try {
    res.json(await City.findAll(options));
  } catch (e) {
    const msgErr = `In indigenous-land.controller, method getAllSimplified:${e}`;
    console.log(msgErr);
    res.json(msgErr);
  }
};

exports.getAllRegionsSimplified = async (req, res) => {
  const options = {
    attributes: [
      ['comarca', 'name']
    ],
    group: 'comarca',
    order: [
      ['comarca']
    ]
  };
  try {
    res.json(await City.findAll(options));
  } catch (e) {
    const msgErr = `In indigenous-land.controller, method getAllSimplified:${e}`;
    console.log(msgErr);
    res.json(msgErr);
  }
};

exports.getAllMesoregionsSimplified = async (req, res) => {
  const options = {
    attributes: [
      ['nm_meso', 'name']
    ],
    group: 'nm_meso',
    order: [
      ['nm_meso']
    ]
  };
  try {
    res.json(await City.findAll(options));
  } catch (e) {
    const msgErr = `In indigenous-land.controller, method getAllSimplified:${e}`;
    console.log(msgErr);
    res.json(msgErr);
  }
};

exports.getAllMicroregionsSimplified = async (req, res) => {
  const options = {
    attributes: [
      ['nm_micro', 'name']
    ],
    group: 'nm_micro',
    order: [
      ['nm_micro']
    ]
  };
  try {
    res.json(await City.findAll(options));
  } catch (e) {
    const msgErr = `In indigenous-land.controller, method getAllSimplified:${e}`;
    console.log(msgErr);
    res.json(msgErr);
  }
};