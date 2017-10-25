### <img src="https://tva1.sinaimg.cn/crop.60.33.341.341.180/6ead3666jw1e7rp1wn6lpj20cu0crgnf.jpg" style="width: 24px;height:24px;border-radius:50%;margin: 0;">2017-10-25 17:44 天气晴 <img src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png" width="24" height="24" style="margin: 0;">
 
-------
### geolocation对象

> 地理位置 API 通过 navigator.geolocation 提供。

如果对象存在，那么地理位置服务可用

```
if ("geolocation" in navigator) {
  /* 地理位置服务可用 */
} else {
  /* 地理位置服务不可用 */
}
```

* 注意: 在 Firefox 24 和之前的浏览器中，即使 *API* 被禁止，代码 "geolocation" in navigator 也总是会得到 true。这在 Firefox 25 中已经被修复 [bug 884921](https://bugzilla.mozilla.org/show_bug.cgi?id=884921)。

### 获取当前位置

您可以调用 getCurrentPosition() 函数获取用户当前定位位置。这会异步地请求获取用户位置，并查询定位硬件来获取最新信息。当定位被确定后，定义的回调函数就会被执行。您可以选择性地提供第二个回调函数，当有错误时会被执行。第三个参数也是可选的，您可以通过该对象参数设定最长可接受的定位返回时间、等待请求的时间和是否获取高精度定位。

```
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

原文地址：[使用地理位置地位](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using_geolocation)

### ios10系统无法定位 获取不到地址
具体原因：
>   在IOS 10中，苹果对webkit定位权限进行了修改，所有定位请求的页面必须是https协议的。如果是非https网页，在http协议下通过html5原生定位接口会返回错误，
  也就是无法正常定位到用户的具体位置，而已经支持https的网站则不会受影响。

两种基本的解决方案：

1.将网站的http设置为Https。

2.通过第三方解决，即通过调用百度地图或者腾讯地图来获取地理位置

参考地址： [http://blog.csdn.net/for12/article/details/52803787](http://blog.csdn.net/for12/article/details/52803787)

3.另一种方法：通过iframe绕过IOS的限制

```
var options = { enableHighAccuracy: true, maximumAge: 30000, timeout: 12000 }
window.locationCallback = function (err, position) {
    if (err) {
        showError(err); return; 
    } 
        showPosition(position); 
}
var str = '<iframe src="javascript:(function(){ ' + 'window.navigator.geolocation.getCurrentPosition(' + 'function(position){parent && parent.locationCallback && parent.locationCallback(null,position);}, ' + 'function(err){parent && parent.locationCallback && parent.locationCallback(err);}, ' + '{enableHighAccuracy : ' + options.enableHighAccuracy + ', maximumAge : ' + options.maximumAge + ', timeout :' + options.timeout + '})' + ';})()" style="display:none;"></iframe>'; 
$(str).appendTo('body')
window.showPosition = function (position) {
    //  TODO
    console.log(position)
}
window.showError=function(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
        alert('用户不允许地理定位!');
        break;
        case error.POSITION_UNAVAILABLE:
        alert('无法获取当前位置!');
        break;
        case error.TIMEOUT:
        alert('操作超时!');
        break;
        case error.UNKNOWN_ERROR:
        alert('未知错误！');
        break;
    }
}
```