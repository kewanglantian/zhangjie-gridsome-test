// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {
    const Blogs = require('./content/blog/data.json');

    const data = actions.addCollection({
      typeName: 'BlogPosts'
    })

    for (const blog of Blogs) {
      data.addNode(blog);
    }
  })

  api.loadSource(async actions => {
    const Blogs = require('./content/blog/data1.json');

    const data1 = actions.addCollection({
      typeName: 'BlogPosts1'
    })

    for (const blog of Blogs) {
      data1.addNode(blog);
    }
  })

  api.loadSource(async actions => {
    const Blogs = require('./content/blog/data2.json');
    
    const data2 = actions.addCollection({
      typeName: 'BlogPosts2'
    })

    for (const blog of Blogs) {
      data2.addNode(blog);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
