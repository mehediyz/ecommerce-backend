import app from "./app";
import mongoose from "mongoose";
const port = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
