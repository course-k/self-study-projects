import { chromium } from "playwright"
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import env from 'dotenv';

env.config();

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://scraping-for-beginner.herokuapp.com/ranking/');

const locators = page.locator('.u_areaListRankingBox');
const count = await locators.count();
const contentArr = [];

const serviceAccountAuth = new JWT({
    email: process.env.CLIENT_EMAIL,
    key: process.env.PRIVATE_KEY,
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
    ]

});
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
await doc.loadInfo();
await doc.addSheet({ title: 'scraping', headerValues: ['title', 'rate'] });
const sheet = doc.sheetsByTitle['scraping'];

for (let i = 0; i < count; i++) {
    const locator = locators.nth(i);
    const titleLocator = locator.locator('h2')
    const title = await titleLocator.textContent();
    const rateLocator = locator.locator('.u_rankBox .evaluateNumber');
    const rate = await rateLocator.textContent();
    contentArr.push({
        title,
        rate,
    })
}
await browser.close();

await sheet.addRows(contentArr);
