import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Importing environment variables
dotenv.config({ path: './config.env' });

import app from './app';

const USERNAME: string = process.env.MONGO_USERNAME!;
const PASSWORD: string = process.env.MONGO_PASSWORD!;

const DB: string = process.env.MONGO_URI!.replace('<username>', USERNAME).replace('<password>', PASSWORD);

// Connect to MongoDB
mongoose
  .connect(DB, { dbName: 'softg_db-main' })
  .then(() => console.log('🎈 DB connected sucessfully!'))
  .catch(console.log);

const PORT: number | string = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🎈 Server inizialited, app is running on ${PORT}`);
});
