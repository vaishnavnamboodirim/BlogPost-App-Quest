const path = require('path')
const {getBlogs: getBlogsSvc} = require('../services/blog.json-datasource') //getWorkshops : getWorkshopSvc, this is renaming during destrcturing(pulling out the property from whats exported)

const getHome = (req,res)=> {
    //res.send('Hello, Express')
    //process.jwd() is the path on which we start the Node process, i.e. the project folder
    //res.sendFile(path.join(process.cwd(), 'public/index.html'));
    res.render('index',{
        nav: {
            activeLink: req.url
        },
        title: 'Blog App'
    });
};

const getAbout = (req,res)=> {
    //res.sendFile(path.join(process.cwd(), 'public/about.html'));
    res.render('about',{
        nav: {
            activeLink: req.url
        },
        title: 'About | Blog App'
    });
};


const getBlogs = (req,res)=> {
    const blogs = getBlogsSvc();
    //res.sendFile(path.join(process.cwd(), 'public/about.html'));
    res.render('blogs',{
        nav: {
            activeLink: req.url
        },
        title: 'Lists | Blog App',
        blogs
    });
};

module.exports = {
    getHome,
    getAbout,
    getBlogs
};

