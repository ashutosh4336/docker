import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(
      `MongoDB Connected ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
