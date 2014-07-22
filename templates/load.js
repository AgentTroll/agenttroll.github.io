var load = function(doc) {
  doc.getElementById('navbar').innerHTML = loadPage('navbar.html');
  doc.getElementById('footer').innerHTML = loadPage('footer.html');
};

var loadPage = function(href) {
  var xmlhttp = new XMLHttpRequest();
 
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
 
  return xmlhttp.responseText;
};
