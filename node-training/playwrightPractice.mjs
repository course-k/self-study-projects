import { chromium } from "playwright";
import fs from "fs";
import { Parser } from "json2csv";
import { parse } from "url";
// ブラウザのインスタンスを生成
const browser = await chromium.launch();
// ページを生成
const page = await browser.newPage();
// ページをにアクセス
await page.goto('https://scraping-for-beginner.herokuapp.com/ranking/');

const locators = page.locator('.u_areaListRankingBox');
const count = await locators.count();
const contentArr = [];
for (let i = 0; i < count; i++) {
    const locator = locators.nth(i);
    const titleLocator = locator.filter('h2');
    const title = await titleLocator.textContent();
    const rateLocator = locator.filter('.u_rankBox .evaluateNumber');
    const rate = await rateLocator.textContent();
    contentArr.push({
        title,
        rate,
    })
}
const parser = new Parser();
const csv = parser.parse(contentArr);
fs.writeFileSync('./test-content.csv', csv);

browser.close();