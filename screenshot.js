const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Screenshot Dashboard
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot-dashboard.png', fullPage: false });
  
  // Screenshot Tasks
  await page.goto('http://localhost:3000/tasks');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot-tasks.png', fullPage: false });
  
  // Screenshot Projects
  await page.goto('http://localhost:3000/projects');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot-projects.png', fullPage: false });
  
  // Screenshot Users
  await page.goto('http://localhost:3000/users');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot-users.png', fullPage: false });
  
  // Screenshot Settings
  await page.goto('http://localhost:3000/settings');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot-settings.png', fullPage: false });
  
  await browser.close();
  console.log('Screenshots saved!');
})();
