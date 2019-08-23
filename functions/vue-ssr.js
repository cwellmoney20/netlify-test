// Step 1: Create a Vue instance!
import Vue from 'vue'
// import serverRenderer from 'vue-server-renderer'
import axios from 'axios'
import { async } from 'q';
const serverRenderer = require('vue-server-renderer');

const app = new Vue({
  template: `<h1>SSR Hello World!</h1>`
})

// const template = `<!DOCTYPE html>
//   <head>
//     <title>{{ title }}</title>
//     <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
//   </head>
//   <body>
//     <!--vue-ssr-outlet-->
//   </body>
// </html>`

// Step 2: Create a renderer
const renderer = serverRenderer.createRenderer({
  template: require('fs').readFileSync('index.template.html', 'utf-8')
  // template: template
})

exports.handler = (event, context, callback) => {
  const ssrContext = {
    title: 'Vue SSR Serverless'
  }

  console.log(getData())

  //   Step 3: Render the Vue instance to HTML
  renderer.renderToString(app, ssrContext, (err, html) => {
    if (err) throw err

    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: html
    }

    return callback(null, response)
  })
}


async getData() {
  let testData = await axios.get('https://jsonplaceholder.typicode.com/users')
  return testData
}