import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import env from 'dotenv';

env.config();

(async () => {
    const serviceAccountAuth = new JWT({
        email: process.env.CLIENT_EMAIL,
        key: process.env.PRIVATE_KEY,
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
        ]

    });
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:D10');
    const a1 = sheet.getCell(0, 0);
    const a5 = sheet.getCellByA1('A5');
    a5.value = 'hoge';
    a5.textFormat = {
        fontSize: 18
    };
    await sheet.saveUpdatedCells();

    await doc.addSheet({ title: 'newSheet', headerValues: ['name', 'age', 'country'] });
    const newSheet = doc.sheetsByTitle['newSheet'];
    newSheet.addRow({ name: 'John', age: 20, country: 'America' });
    console.log('a1', a1.value);
})();