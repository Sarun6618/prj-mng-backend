const excelJS = require('exceljs');
const Printer = require('../models/Printer');

const exportss = async (req, res) => {
  try {
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet('Printers');
    worksheet.columns = [
      { header: 'S no.', key: 's_no' },
      { header: 'Make', key: 'Make' },
      { header: 'City', key: 'City' },
      { header: 'Model', key: 'Model' },
      { header: 'DESKTOP/INKJET', key: 'Desktop' },
      { header: 'Tag ID', key: 'TagID' },
      { header: 'Serial Number', key: 'SerialNumber' },
      { header: 'User', key: 'User' },
      { header: 'Status', key: 'Status' },
      { header: 'Remarks', key: 'Remarks' },
      { header: 'Updated By', key: 'Updatedby' },
    ];
    let counter = 1;
    const PrinterData = await Printer.find({});
    PrinterData.forEach((Printer) => {
      Printer.s_no = counter;
      worksheet.addRow(Printer);
      counter++;
    });
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', 'attachment;filename=Printer.xlsx');
    workbook.xlsx.write(res).then(() => {
      res.status(200).send();
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error exporting data to Excel');
  }
};

module.exports = exportss;
