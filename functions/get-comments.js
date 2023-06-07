const mongoose = require('mongoose');
const Comment = require('./schema');

exports.handler = async (event, context) => {
  const mongoURI = process.env.mongoURI;
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Fetch all comments
    const comments = await Comment.find({});

    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comments),
    };

    return response;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};

