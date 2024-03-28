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
    await doc.addSheet({ title: 'fruits', headerValues: ['name', 'price'] });
    const sheet = doc.sheetsByTitle['fruits'];
    const data = [
        {
            name: 'orange',
            price: 120
        },
        {
            name: 'banana',
            price: 50
        },
        {
            name: 'apple',
            price: 100
        },
        {
            name: '合計',
            price: '=sum(B2:B4)'
        }
    ];
    await sheet.addRows(data);
})();