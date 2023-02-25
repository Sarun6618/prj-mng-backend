const excelJS = require('exceljs');
const Monitor = require('../models/Monitor');

const exportss = async (req, res) => {
  try {
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet('Monitors');
    worksheet.columns = [
      { header: 'S no.', key: 's_no' },
      { header: 'Make', key: 'Make' },
      { header: 'City', key: 'City' },
      { header: 'Model', key: 'Model' },
      { header: 'Tag ID', key: 'TagID' },
      { header: 'Serial Number', key: 'SerialNumber' },
      { header: 'User', key: 'User' },
      { header: 'Status', key: 'Status' },
      { header: 'Remarks', key: 'Remarks' },
      { header: 'Updated By', key: 'Updatedby' },
    ];
    let counter = 1;
    const MonitorData = await Monitor.find({});
    MonitorData.forEach((monitor) => {
      monitor.s_no = counter;
      worksheet.addRow(monitor);
      counter++;
    });
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', 'attachment;filename=Monitor.xlsx');
    workbook.xlsx.write(res).then(() => {
      res.status(200).send();
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error exporting data to Excel');
  }
};

module.exports = exportss;
