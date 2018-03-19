var el = document.getElementsByTagName("body")[0];
var header = "<div class=\"header\"><span class=\"smaller\">UGA School of</span><br><span class=\"bigger\">Social Work</span></div>";
var footer = "<div class=\"footer\"><div class=\"online-logo\"><img src=\"http://via.placeholder.com/250x250\"></div><div class=\"ssw-logo\"><img src=\"http://via.placeholder.com/250x250\"></div></div>";
el.innerHTML = header + el.innerHTML;
el.innerHTML += footer;