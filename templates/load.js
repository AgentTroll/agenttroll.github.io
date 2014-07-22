var loadPage = function(href) {
  var xmlhttp = new XMLHttpRequest();
 
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
 
  return xmlhttp.responseText;
};

var load = function(doc) {
  doc.getElementById("navbar").innerHTML = loadPage("/templates/navbar.html");
  doc.getElementById("footer").innerHTML = loadPage("/templates/footer.html");
};
