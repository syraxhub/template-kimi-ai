const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  // Screenshot expanded sidebar
  await page.screenshot({ path: 'screenshot-sidebar-expanded.png', fullPage: false });
  
  // Click collapse button
  const collapseBtn = await page.locator('[data-sidebar="trigger"]').first();
  if (await collapseBtn.isVisible().catch(() => false)) {
    await collapseBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-sidebar-collapsed.png', fullPage: false });
  }
  
  await browser.close();
  console.log('Screenshots saved!');
})();
