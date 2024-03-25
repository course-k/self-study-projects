import { chromium } from "playwright";

// ブラウザのインスタンスを生成
const browser = await chromium.launch();
// ページを生成
const page = await browser.newPage();
// ページをにアクセス
await page.goto('https://scraping-for-beginner.herokuapp.com/ranking/');
// ページの内容を取得
// const htmlStr = await page.content();

const locator = page.locator('h3');
const title = await locator.innerText();

console.log(title);

browser.close();