+ csrf即跨站请求伪造，利用用户已登录的身份,在用户毫不知情的情况下，以用户的明义完成非法操作
  + 实现原理：用户已经登录了站点A，并在本地记录了cookie
  + 在用户没有登出站点A的情况下，访问了恶意攻击者提供的引诱危险站点B
  + B站点可以伪造站点A的表单，把表单的target指向一个ifream的name，并且隐藏ifream，自动提交表单，这样提交表单不会刷新页面了
  + 由于表单是可以跨域的并且拥有站点A的登录态，所以提交信息是有效的
+ csrf防御
  + referer验证，但referer可以伪造，并且https默认是不发送referer的
  + 验证码，人机交互
  + cookie值进行hash：攻击者在访问信任网站A时，虽然浏览器可以在请求中带上cookie，但是网站A却不仅仅通过cookie来判断用户身份，同时通过用户发送过来的内容中的伪随机数来判断请求真正时用户发送的。攻击者在请求A的时候不能在提交的内容中产生伪随机数