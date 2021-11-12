# tao back-end

npm init -y
tao file server.js

# cai phu thuoc trong tm backend

npm install cookie-parser debug express http-errors morgan path

- cookie-parser : phan tich cu phap cookie, dien req.cookies
- debug: go loi node
- morgan: ghi log req http cho node
- http-error: tao loi http de xl loi express
- path:duong dan

npm install async dotenv express-validator luxon mongoose
npm install nodemon --save-dev

- cors: chia sẻ tài nguyên chéo( de goi api (do domain cua client server khac nhau))
- mongoose: ket noi csdl mongoDB
- async: xu li k dong bo
- dotenv: bien moi truong
- express-validator: validate,santize form
- luxon: dinh dang ngay thang
- nodemon: auto reset lai khi sua code back end (do phai f5)
  them vao package.json script (powersell)
  "devstart": "nodemon ./sever",
  "serverstart": "DEBUG=backend:\* |npm run devstart"

# **react, node chay tren 2 port khac nhau react port 3000, node port trong env (hoac 8000), node luon co /api trc router de tranh trung(de) vs cac router trong react**

- require express va sua dinh nghia 2 router /api, /api/users va chay server tren port o file env(neu k co mac dinh la 8000)

# chay back end

npm run dev

# lan sau nho chi dinh ten db trong bien moi truong voi collection dc anh xa trong Schemal de query vao db da co k nos tao cai moi :v
