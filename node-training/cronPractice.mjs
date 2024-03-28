import cron from 'node-cron';
cron.schedule('* * * * * *', () => console.log('every second'));
cron.schedule('*/3 * * * * *', () => console.log('each  3 seconds'));