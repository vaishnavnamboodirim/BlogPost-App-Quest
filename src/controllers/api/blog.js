const { getBlogs: getBlogsSvc,
    getBlogssById: getBlogsByIdSvc,
    createBlog,
    updatedBlog,
    removeBlog
} = require('../../services/blogs')

const getBlogs = async (req, res) => {

    const { modes } = req.query

    const blogs = await getBlogsSvc({
        filter: {
            modes: modes
        }
    });

    res.json({
        data: blogs
    })
};

const getBlogsById = async (req, res) => {

    //"path parameters " are in req.params
    console.log(req.path);

    const { id } = req.params;

    const blog = await getBlogsByIdSvc(id);

    if(!blog) {
        return res.status(404).json({
            status: 'error',
            message: 'Not found'
        });

    }

    res.json({
        data: blog
    });
};

const postBlog = async (req, res) => {
    const blog = req.body;

    try {
        const updatedBlog = await createBlog(blog);
        res.status(201).json({
            data: updatedBlog
        });
    } catch(error) {
        if(error.name === 'ValidationError' || error.name === 'CastError') {
            res.status(400).json({
                message: error.message
            });
        } else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
};

const patchBlog = async(req,res) => {
    const blog = req.body;
    const {id} = req.params;

    try {
        const updateBlog = await updatedBlog(id, blog);
        res.json({
            message: updateBlog
        });
    } catch(error){
        if(error.name === 'ValidationError' || error.name === 'CastError') {
            res.status(400).json({
                message: error.message
            });
        } else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
};

const deleteBlog = async (req,res) => {
    const {id} = req.params;

    try{
        await removeBlog(id);
        //204 -> empty respnse body
        res.status(204).json();
    } catch(error) {
        if(error.name === 'ValidationError' || error.name === 'CastError') {
            res.status(400).json({
                message: error.message
            });
        } else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
};

module.exports = {
    getBlogs,
    getBlogsById,
    postBlog,
    patchBlog,
    deleteBlog
}
