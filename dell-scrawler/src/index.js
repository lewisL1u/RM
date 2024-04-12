const puppeteer = require("puppeteer");
const url =
  "https://outlet.us.dell.com/ARBOnlineSales/Online/InventorySearch.aspx?brandId=2801&c=us&cs=28&l=en&s=dfb&ref=cpcl_lp-us-outlet-tab-laptop-all0_cta_link_shopalllaptops";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  // Now you can use page.evaluate to scrape the data you need from the page
  const data = await page.evaluate(() => {
    const mainDiv = document.querySelector("#configurations");
    const items = mainDiv ? Array.from(mainDiv.childNodes) : [];
    return items;
  });
  console.log(data);
  await browser.close();
})();
