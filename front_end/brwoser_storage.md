客户端本地存储
===

资源：
* [常用的本地存储——cookie篇](https://segmentfault.com/a/1190000004743454)
* [聊一聊 cookie](https://segmentfault.com/a/1190000004556040)

本地存储： 将数据存储在客户端。

优点：

1. 缓存
2. 离线数据

常用的本地存储：

1. cookie

    优点：兼容性好

    缺点：一是增加了网络流量(每次请求都会在浏览器和服务器之间传递)；二则是它的数据容量有限，最多只能存储**4KB**的数据，浏览器之间各有不同；三是不安全(明文传递)。

    标准限制每个域名下cookie数量最多为20个，但浏览器具体实现会大于20个。

    cookie添加到http请求头部是浏览器行为。存储在cookie中的数据每次都会被放在http请求中。最适合做身份验证。

    访问cookie： 浏览器提供cookie属性给javascript，可以通过document.cookie来访问。（只能访问到非HttpOnly的数据，HttpOnly属性由服务端设置）

    服务端通过响应response头部的set-cookie字段来设置cookie（每个字段只能设置一个cookie, 服务端可以设置cookie 的所有选项：expires、domain、path、secure、HttpOnly）

    修改、删除cookie: 重新赋值 (name/domain/path)

2. Web存储: sessionStorage & localStorage
3. indexedDB
4. 其他不是web标准的存储 (userData, Google Gears)
