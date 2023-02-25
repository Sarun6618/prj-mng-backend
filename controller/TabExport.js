const excelJS = require('exceljs');
const Tab = require('../models/Tab');

const exportss = async (req, res) => {
  try {
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet('Tabs');
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
    const TabData = await Tab.find({});
    TabData.forEach((tab) => {
      tab.s_no = counter;
      worksheet.addRow(tab);
      counter++;
    });
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', 'attachment;filename=Tab.xlsx');
    workbook.xlsx.write(res).then(() => {
      res.status(200).send();
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error exporting data to Excel');
  }
};

module.exports = exportss;
