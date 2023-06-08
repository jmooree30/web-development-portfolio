const mongoose = require('mongoose');
const Comment = require('./../schema');

exports.handler = async (event, context) => {
  const mongoURI = process.env.mongoURI;
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Parse the incoming data from the event
    const data = JSON.parse(event.body);

    // Create a new document using the Mongoose model
    const newComment = new Comment({
      text: data.comment,
      name: data.name,
      blog: data.blog
    });
    newComment.save();

    return {
      statusCode: 200,
      body: newComment,
    };
  } catch (error) {
    console.error('Error saving data:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
