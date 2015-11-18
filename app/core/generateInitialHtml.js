import { serverSideApp } from './getRootApp'

export default function generateInitialHtml(store, initialState, renderProps) {

  return `
    <!doctype html>
    <html>
      <head>
        <title>Universal JavaScript</title>

        <style>
          body {
            font-family: 'Source Sans Pro',sans-serif;
            padding: 0;
            margin: 0;
          }

          #root {
            padding: 1em;
            height: 100%;
            width: 100%;
            position: absolute;
          }

          .card {
            border-radius: 2px;
            -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
            -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
            box-shadow: 0 1px 2px rgba(0,0,0,0.07);
            width: 200px;
            height: 200px;
            margin: 10px 20px 10px 0px;
            display: block;
            color: #333;
            float: left;
            font-weight: 200;
            text-decoration: none;
            border: 1px solid #CCCCCC;
            padding: 15px;
            box-sizing: border-box;
            overflow: hidden;
          }

          .card:hover {
            border: 2px solid #77A5FF;
          }

          .img {
            opacity: 0;
            z-index: 0;
            transform: scale3d(0.9, 0.9, 0.9);
            transition: all .30s ease-out;
          }

          .img_loaded {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }

          input {
            border-radius: 2px;
            border: 1px solid #CCCCCC;
            display: width inherit;
            font-size: 1.2em;
            margin-bottom: 10px;
            text-indent: 10px;
            font-size: 20px;
            height: 40px;
            font-weight: 200;
            width: 100%;
            max-width: 850px;
            padding: 10px;
          }
        </style>

      </head>
      <body>
        <div id='root'>${serverSideApp(store, renderProps)}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src='static/bundle.js'></script>
      </body>
    </html>
    `
}
