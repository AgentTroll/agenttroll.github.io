var load = function(document) {
  document.getElementById('navbar').innerHTML = loadPage('navbar.html');
  document.getElementById('footer').innerHTML = loadPage('footer.html');
};

var loadPage = function(href) {
  var xmlhttp = new XMLHttpRequest();
 
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
 
  return xmlhttp.responseText;
};
