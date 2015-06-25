var queryString = {};
(function (QS) {
    QS.formatToJson = function (str) {
        var arry = unescape(str).split('&');
        for (var i = 0; i < arry.length; i ++) {
            var index = arry[i].search('=');
            arry[i] = arry[i].substring(0, index) + '":"' + arry[i].substring(index + 1);
        }
        var formatStr = '{"' + arry.join('","') + '"}';
        var formatjson = JSON.parse(formatStr);
        return formatjson;
    },
    QS.formatToString = function (json) {
        if (typeof json === 'object') {
            var str = '{';
            for (var i in json) {
                str += i + ':' + json[i] + ',';
            }
            var formatString = str.substring(0,str.length-1) + '}';
            return formatString;
        }
    }
}(queryString))
