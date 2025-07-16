const { sql } = require('@vercel/postgres');
require('dotenv').config({ path: '.env' });

async function resetDatabase() {
    try {
        await sql`DROP TABLE IF EXISTS invoices`;
        await sql`DROP TABLE IF EXISTS customers`;
        await sql`DROP TABLE IF EXISTS revenue`;
        await sql`DROP TABLE IF EXISTS users`;
        console.log('Tables dropped successfully');
    } catch (error) {
        console.error('Error dropping tables:', error);
    }
}

resetDatabase();
