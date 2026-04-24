const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173/template/evergov-network', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'src/assets/images/evergov_network_actual.png' });
  
  // Also capture mobile version
  await page.setViewport({ width: 375, height: 812 });
  await page.screenshot({ path: 'src/assets/images/evergov_network_mobile_actual.png' });
  console.log('Screenshots captured successfully.');
  await browser.close();
})();
