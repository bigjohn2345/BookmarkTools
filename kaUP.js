var origFetch = window.fetch
var rtnval
var kickBack
var eeeee
var cckk
var rtnn
var rtnni
var searchedi

JSON.stringify = JSON.stringify || function(obj) {
    var t = typeof(obj);
    if (t != "object" || obj === null) {
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);
    } else {
        var n, v, json = [],
            arr = (obj && obj.constructor == Array);
        for (n in obj) {
            v = obj[n];
            t = typeof(v);
            if (t == "string") v = '"' + v + '"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};

var OrigFetch = window.fetch;
window.fetch = function() {
    rtnval = origFetch.apply(this, arguments)
    kickBack = rtnval
    rtnval.then(function(rspv) {
        if (rspv.url.indexOf("/assessment_item?") != "-1") {
            console.log(rspv.url)
            origFetch(rspv.url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    rtnn = JSON.parse(JSON.stringify(myJson));
                    rtnni = JSON.parse(rtnn.itemData)
                    var newWin = window.open()
                    newWin.document.write(JSON.stringify(rtnni.question.widgets, undefined, 2))
                });

        }
    });
    return kickBack
}
