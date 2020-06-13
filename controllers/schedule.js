const fs = require('fs');
const neatCsv = require('neat-csv');

exports.schedule_getData = async function (req, res) {
  fs.readFile('./files/listado_comedor.csv', async (err, data) => {
    if (err) {
      res.status(500).json({
        status: 500,
        error: 'No hay datos para mostrar',
      });
      return;
    }
    try {
      let schedule = await neatCsv(data);

      res
        .status(200)
        .json({ status: 200, schedule: schedule, msge: 'data correct' });
    } catch (error) {
      res
        .status(500)
        .json({ status: 500, error: error, msge: 'data incorrect' });
    }
  });
};

exports.schedule_saveFile = async function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  await saveFile(req.files.csv, 'listado_comedor' + '.csv');
  res.status(200).json({ success: true });
};

const saveFile = async (file, filename) => {
  return new Promise((resolve, reject) => {
    try {
      file.mv('./files/' + filename);
      resolve({
        status: true,
        message: 'File is uploaded',
        data: {
          name: file.name,
          mimetype: file.mimetype,
          size: file.size,
        },
      });
    } catch (err) {
      reject(err);
    }
  });
};
