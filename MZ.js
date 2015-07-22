/**
 * MZ 移动端框架库
 * @author Heaven
 * @E-mail lichenbuliren@gmail.com
 * @version 0.0.1
 * @return {[type]} [description]
 */
(function(w, d) {
    if(!window.MZ){
        window.MZ = {};
    }

    var location = window.location,
        html = d.documentElement,
        userAgent = navigator.userAgent.toLowerCase(),
        ie6 = /msie 6.0/.test(userAgent),
        opera = /opera/.test(userAgent),
        ie = /msie/.test(userAgent) && !opera,
        safari = /webkit/.test(userAgent),
        ff = /firefox/.test(userAgent);

    var tips = {
        require: '缺少参数，参数为必填项',
        illegal: '参数不合法'
    }

    // MP = MZ.prototype;
    MZ = window.MZ;
    /**
     * 设置命名空间
     * @param  {String} name 命名空间名称，多级空间使用'.'分割
     * @return {[type]}      [description]
     */
    MZ.prototype.namespace = function(name) {
        var arr = name.split('.'),
            o = MZ;
        for (var i = (arr[0] == 'MZ' ? 1 : 0); i < arr.length; i++) {
            o[arr[i]] = o[arr[i]] || {};
            o = o[arr[i]];
        }
    }
})(window, document);