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
    const newSheet = doc.sheetsByTitle['newSheet'];
    const rows = await newSheet.getRows();
    console.log(rows[0].get('name'));
    rows[0].set('name', 'Bob');
    console.log(rows[0].get('name'));

    await rows[0].save();
})();