const puppeteer = require("puppeteer");

const getInvoiceHTML = (data) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example 1</title>
    <link rel="stylesheet" href="style.css" media="all" />

    <style>
    .clearfix:after {
        content: "";
        display: table;
        clear: both;
      }
      
      a {
        color: #5D6975;
        text-decoration: underline;
      }
      
      body {
        position: relative;
        width: 21cm;  
        height: 29.7cm; 
        margin: 0 auto; 
        padding:20px;
        color: #001028;
        background: #FFFFFF; 
        font-family: Arial, sans-serif; 
        font-size: 12px; 
        font-family: Arial;
      }
      
      header {
        padding: 10px 0;
        margin-bottom: 30px;
      }
      
      #logo {
        text-align: center;
        margin-bottom: 10px;
      }
      
      #logo img {
        width: 90px;
      }
      
      h1 {
        border-top: 1px solid  #5D6975;
        border-bottom: 1px solid  #5D6975;
        color: #5D6975;
        font-size: 2.4em;
        line-height: 1.4em;
        font-weight: normal;
        text-align: center;
        margin: 0 0 20px 0;
        background: url(dimension.png);
      }
      
      #project {
        float: left;
      }
      
      #project span {
        color: #5D6975;
        text-align: right;
        width: 52px;
        margin-right: 10px;
        display: inline-block;
        font-size: 0.8em;
      }
      
      #company {
        float: right;
        text-align: right;
      }
      
      #project div,
      #company div {
        white-space: nowrap;        
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px;
      }
      
      table tr:nth-child(2n-1) td {
        background: #F5F5F5;
      }
      
      table th,
      table td {
        text-align: center;
      }
      
      table th {
        padding: 5px 20px;
        color: #5D6975;
        border-bottom: 1px solid #C1CED9;
        white-space: nowrap;        
        font-weight: normal;
      }
      
      table .service,
      table .desc {
        text-align: left;
      }
      
      table td {
        padding: 20px;
        text-align: right;
      }
      
      table td.service,
      table td.desc {
        vertical-align: top;
      }
      
      table td.unit,
      table td.qty,
      table td.total {
        font-size: 1.2em;
      }
      
      table td.grand {
        border-top: 1px solid #5D6975;;
      }
      
      #notices .notice {
        color: #5D6975;
        font-size: 1.2em;
      }
      
      footer {
        color: #5D6975;
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #C1CED9;
        padding: 8px 0;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <header class="clearfix">
      <div id="logo">
        <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-receipt-icon-png-image_4187172.jpg">
      </div>
      <h1>Supplier Order Invoice</h1>
      <div id="company" class="clearfix">
        <div>Saaf Paani</div>
        <div>UET Lahore<br /> AZ 85004, PK</div>
        <div>(921) 123-6882</div>
        <div><a href="mailto:company@saafpaani.com">company@saafpaani.com</a></div>
      </div>
      <div id="project">
        <div><span>CLIENT</span>${data.supplier.firstName} ${
    data.supplier.lastName
  }</div>
        <div><span>EMAIL</span> <a href="mailto:${data.supplier.email}">${
    data.supplier.email
  }</a></div>
        <div><span>DATE</span>${new Date().toString("yyyy-MM-dd")}</div>
      </div>
    </header>
    <main>
      <table>
        <thead>
          <tr>
            <th class="service">ITEM ID</th>
            <th class="desc">NAME</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
         
          ${data.items.map(({ name, id, quantity, price }) => {
            return `<tr>
                <td class="service">${id}</td>
                <td class="desc">${name}</td>
                <td class="unit">${quantity}</td>
                <td class="qty">${price} Rs</td>
                <td class="total">${price * quantity} Rs</td>
              </tr>`;
          })}


          <tr>
            <td colspan="4" class="grand total">GRAND TOTAL</td>
            <td class="grand total">${data.totalPrice} Rs</td>
          </tr>
        </tbody>
      </table>
      <div id="notices">
        <div>NOTICE:</div>
        <div class="notice">This invoice will be send to your attached email address.</div>
      </div>
    </main>
  </body>
</html>
    `;
};

module.exports = async (data) => {
  try {
    const invoiceHTML = getInvoiceHTML(data);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(invoiceHTML);

    const pdfPath = `invoices/${Date.now()}_${data.supplier._id}.pdf`;

    await page.pdf({
      path: `${__dirname}/../uploads/${pdfPath}`,
      format: "a4",
      printBackground: true,
    });

    await browser.close();

    return pdfPath;
  } catch (error) {
    console.log("pdf error", error);
  }
};
