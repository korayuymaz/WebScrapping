const puppeteer = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch({ headless: false})
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com/")
    await page.click(".col-md-4 a");
    
    await page.waitForSelector('#username')
    await page.type('#username', 'MyUsername')

    await page.waitForSelector('#password')
    await page.type('#password', 'Password')

    await page.click('.btn.btn-primary');
    await page.click('.col-md-4 a');
    
    /* Below Function used when if one class used for multiple elements */
    const f = await page.$eval("[class='text']", el => el.innerText)
    console.log(f)

    /* Trying to find xpath
    await page.waitForXPath("//div[@class='col-md-4 tags-box']/h2");
    const header = (await page.$x("//div[@class='col-md-4 tags-box']/h2"))[0];
    console.log(header) */

    browser.close()
})();