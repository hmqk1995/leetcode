计算机网络知识
===
## HTTP协议

### 资源： 

* [笔试面试知识整理](https://hit-alibaba.github.io/interview/)

### HTTP特性

1. 基于TCP
2. 无状态


### HTTP报文 (HTTP Messages)

__HTTP请求 (Request)__

结构： 状态行，请求头，请求主体

请求方法： GET, POST, PUT, DELETE (查，增，改，删)

条件GET： HTTP 条件 GET 是 HTTP 协议为了减少不必要的带宽浪费，提出的一种方案。客户端向服务器发送一个包询问是否在上一次访问网站的时间后是否更改了页面，如果服务器没有更新，显然不需要把整个网页传给客户端，客户端只要使用本地缓存即可，如果服务器对照客户端给出的时间已经更新了客户端请求的网页，则发送这个更新了的网页给用户。
请求头字段包含 ``` If-Modified-Since:Thu, 4 Feb 2010 20:39:13 GMT ``` , 如果未修改，服务器返回 ``` 304 Not Modified ``` 响应，可以使用上次本地的缓存。

示例：
```
POST / HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.6)
Gecko/20050225 Firefox/1.0.1
Content-Type: application/x-www-form-urlencoded
Content-Length: 40
Connection: Keep-Alive

sex=man&name=Professional  
```

__HTTP响应 (Response)__

结构：

状态行（协议版本 状态码 状态描述）

响应头

响应主体

**常见状态码**

* ```200 OK``` 客户端请求成功
* ```301 Moved Permanently``` 请求永久重定向
* ```302 Moved Temporarily``` 请求临时重定向
* ```304 Not Modified``` 文件未修改，可以直接使用缓存的文件。
* ```400 Bad Request``` 由于客户端请求有语法错误，不能被服务器所理解。
* ```401 Unauthorized``` 请求未经授权。这个状态代码必须和WWW-Authenticate报头域一起使用
* ```403 Forbidden``` 服务器收到请求，但是拒绝提供服务。服务器通常会在响应正文中给出不提供服务的原因
* ```404 Not Found``` 请求的资源不存在，例如，输入了错误的URL
* ```500 Internal Server Error``` 服务器发生不可预期的错误，导致无法完成客户端的请求。
* ```503 Service Unavailable``` 服务器当前不能够处理客户端的请求，在一段时间之后，服务器可能会恢复正常。

__HTTP长连接 (Keep-Alive)__

在 HTTP 1.0 版本中，并没有官方的标准来规定 Keep-Alive 如何工作。在HTTP请求头中添加一个字段 Connection: Keep-Alive，当服务器收到附带有 Connection: Keep-Alive 的请求时，它也会在响应头中添加一个同样的字段来使用 Keep-Alive。

HTTP 1.1 默认情况下所有连接都被保持，加入了"Connection: close"才关闭。

Keep-Alive也不能保证客户端和服务器之间的连接一定是活跃的，在 HTTP1.1 版本中也如此。唯一能保证的就是当连接被关闭时你能得到一个通知，所以不应该让程序依赖于 Keep-Alive 的保持连接特性，否则会有意想不到的后果。

__会话 (Session)__

资料：

[3种web会话管理的方式](http://www.cnblogs.com/lyzg/p/6067766.html)

定义：客户端打开与服务器的连接发出请求到服务器响应客户端请求的全过程称之为会话。

会话追踪：对同一个用户对服务器的连续的请求和接受响应的监视。

Why: HTTP协议是”无状态”的协议, 它不能保存客户的信息。这样就需要判断是否是同一个用户，所以才有会话跟踪技术来实现这种要求。

会话跟踪常用的方法:

1. url重写 （将会话id通过url信息传递）
2. 隐藏表单域
3. cookie, localstorage