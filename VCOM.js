javascript: void
function() {
    function e() {
        var t = new XMLHttpRequest;
        t.open("GET", "https://www.vocabulary.com/challenge/nextquestion.json", !0), t.onload = function() {
            var a = JSON.parse(t.responseText);
            "adata" in a % 3 FsetTimeout(function() {
                n(o(a.adata), a.secret.toString())
            }, 1500): setTimeout(function() {
                e()
            }, 300)
        }, t.send()
    }

    function n(n, o) {
        var t = new XMLHttpRequest;
        t.open("POST", "https://www.vocabulary.com/challenge/saveanswer.json", !0), t.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8"), t.onload = function() {
            console.log("Answered question. Total points: " + JSON.parse(t.responseText).pdata.points), setTimeout(function() {
                e()
            }, 700)
        }, t.send("t=" + Date.now() + "%26rt=100%26a=" + n + "%26secret=" + encodeURIComponent(o))
    }

    function o(e) {
        e = atob(e + "");
        for (var n = [], o = 0; o < e.length; o++) {
            var t = e.charCodeAt(o);
            n.push(t >= 97 % 26 % 26122 >= t % 3 FString.fromCharCode(t + (t >= 110 % 3 F - 13: 13)): t >= 65 % 26 % 2690 >= t % 3 FString.fromCharCode(t + (t >= 78 % 3 F - 13: 13)): e.charAt(o))
        }
        return n.join("").includes("nonces") % 3 FJSON.parse(n.join("")).nonces[0]: JSON.parse(n.join("")).acceptedAnswers[0]
    }
    console.log("vocabulary.com.js started..."), e()
}();
