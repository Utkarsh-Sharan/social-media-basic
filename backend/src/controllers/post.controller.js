const createPost = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);
    } catch (error) {
        console.error("Error creating a post!", error);
    }
}

export {
    createPost,
}