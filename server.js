// 章节 12 - Provider-and-connect.js

// 终于到这里了! 准备好在 React 应用中使用 Redux 了吗?

// 你看到的这个应用程序例子已经精简的不能再精简了(对一个产品和设计来说的话)...
// 我们只关注了使用 react-redux 中2个主要的绑定 (https://github.com/gaearon/react-redux):
// 1) Provider 组件
// 2) connect 函数

// 但在开始下一步之前，先看看为了使应用程序能在浏览器中访问到，需要如何做一些基本设置。

// 该应用中我们没有用 Express (http://expressjs.com/)，因为在一个如此简单的 HTML 页面中，我们都不需要用到它。

// 这里我们使用 http 模块来创建一个 http 服务器
import http from 'http'
import director from 'director'

var router = new director.http.Router();

// 这里创建应用程序主服务器。 它会伺服所有的 URI 到同一个页面上,
// 所以这里并没有具体的路由逻辑，除了一个拒绝 favicon 请求的代码。
var server = http.createServer(function (req, res) {
    // 别管这个，它仅仅用来取消浏览器对 favicon 的自动请求,
    // 如果不这样做的话，该服务器会返回一个 HTML 页面。
    if (req.url.match('favicon.ico')) {
        return res.end()
    }

    req.chunks = [];
    req.on('data', function (chunk) {
        req.chunks.push(chunk.toString());
    });

    router.dispatch(req, res, function (err) {
        if (err) {
            res.writeHead(404);
            res.end();
        }

        console.log('Served ' + req.url);
    });


})

router.get('/', function () {
    
    // 当然还有，这里是我们应用程序返回给浏览器的 HTML。
    // 没什么特别的，除了将应用程序的 JS 包地址指定到
    // webpack dev server (located at http://localhost:5051)
    this.res.write(
    `
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="renderer" content="webkit">
        <meta http-equiv="Cache-Control" content="no-siteapp" />
    </head>

    <body>
        hello node server
    </body>

    </html>
    `
    );

    this.res.end();
});


router.get(/foo/, function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end('hello world\n');
});

router.post(/foo/, function () {
  this.res.writeHead(200, { 'Content-Type': 'application/json' });
  this.res.end(JSON.stringify(this.req.body));
});

// 转到 ./index.jsx，那是我们应用程序初始化的地方。
// 为了让对 webpack 不熟悉的人更容易理解，其实 index.jsx 是被定义(在 12_src/webpack.config.js中) 为 JS 包的入口 (首个文件)
// 当 JS 包被载入到浏览器后，它将被自动运行。

// 如果 5050 端口号已经被占用了，那么就修改下面的端口号。
// 如果端口号是 X，那么我们可以用 X 作为服务器的端口号，用 X+1 作为 webpack-dev-server 的端口号
const port = 5054

// ... 还有主应用服务器。
server.listen(port)

console.log(`Server is listening on http://127.0.0.1:${port}`)
