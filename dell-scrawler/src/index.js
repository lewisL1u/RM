const puppeteer = require("puppeteer");
const url =
  "https://outlet.us.dell.com/ARBOnlineSales/Online/InventorySearch.aspx?brandId=2801&c=us&cs=28&l=en&s=dfb&ref=cpcl_lp-us-outlet-tab-laptop-all0_cta_link_shopalllaptops";

(async () => {
  const browser = await puppeteer.launch({devtools: true});
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2", timeout: 1000000000 });
  // Now you can use page.evaluate to scrape the data you need from the page
  const data = await page.$$eval("#configurations > div > ul", (uls) => {
    return uls.map(ul => {
      return ul.textContent?.split(/[\\n]*\s\s+/g).filter(product => product !== "");
    });
  });
  console.log(data);

  await browser.close();
})();


// filter change
// grab current page->send to queue
// click next page if class==='fl-page-button'

// url,
// filter function,
// category grab,
// data grab function,
// next button with condition

/*
DB:
  Product:
    hash: string
    brand: string (all capital)
    productType: string
    img: blob
    productUrl: string
    productInfo: json string
    use: []
    price: float
    originalPrice: float
  
  Category:
    brand: string (all capital)
    productType: string
    info: json string

  User:
    gmail: string
    token: string

  Like:
    gmail: string
    Product: json string

  History:
    gmail: string
    Product: json string

*/
