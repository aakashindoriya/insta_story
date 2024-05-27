const mongoose=require("mongoose")

const storySchema = new mongoose.Schema({
    user: String,
    images: [String],
  });


const Story = mongoose.model('Story', storySchema);

module.exports(Story)