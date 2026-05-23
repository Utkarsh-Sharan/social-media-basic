import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
    }
});

export const Post = mongoose.model("Post", postSchema);