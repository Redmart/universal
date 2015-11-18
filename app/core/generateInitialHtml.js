import { serverSideApp } from './getRootApp'

export default function generateInitialHtml(store, initialState, renderProps) {

  return `
    <!doctype html>
    <html>
      <head>
        <title>Universal JavaScript</title>
        <link rel="stylesheet" type="text/css" href="https://s3-ap-southeast-1.amazonaws.com/stylomilo.redmart.com/cdncss/base.css">
        <style>
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
        </style>
      </head>
      <body>
        <div style='padding: 1em;' id='root'>${serverSideApp(store, renderProps)}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src='static/bundle.js'></script>
      </body>
    </html>
    `
}
