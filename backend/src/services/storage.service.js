import Imagekit from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

const imageKit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const uploadFile = async (buffer) => {
    const result = await imageKit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg",
    });

    return result;
}