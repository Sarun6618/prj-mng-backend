const excelJS = require('exceljs');
const Laptop = require('../models/Laptop');

const exportss = async (req, res) => {
  try {
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet('Laptops');
    worksheet.columns = [
      { header: 'S no.', key: 's_no' },
      { header: 'Make', key: 'Make' },
      { header: 'City', key: 'City' },
      { header: 'Model', key: 'Model' },
      { header: 'Tag ID', key: 'TagID' },
      { header: 'Serial Number', key: 'SerialNumber' },
      { header: 'Processor', key: 'Processor' },
      { header: 'Generation', key: 'Generation' },
      { header: 'OS', key: 'os' },
      { header: 'OS Key', key: 'OSKey' },
      { header: 'Hostname', key: 'Hostname' },
      { header: 'RAM', key: 'RAM' },
      { header: 'Storage', key: 'Storage' },
      { header: 'Graphics', key: 'Graphics' },
      { header: 'User', key: 'User' },
      { header: 'Status', key: 'Status' },
      { header: 'Remarks', key: 'Remarks' },
      { header: 'Updated By', key: 'Updatedby' },
    ];
    let counter = 1;
    const LaptopData = await Laptop.find({});
    LaptopData.forEach((laptop) => {
      laptop.s_no = counter;
      worksheet.addRow(laptop);
      counter++;
    });
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', 'attachment;filename=Laptop.xlsx');
    workbook.xlsx.write(res).then(() => {
      res.status(200).send();
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error exporting data to Excel');
  }
};

module.exports = exportss;
