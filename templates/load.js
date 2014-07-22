var load = function(document) {
  document.getElementById('navbar').innerHTML = loadPage('/templates/navbar.html');
  document.getElementById('footer').innerHTML = loadPage('/templates/footer.html');
}

var loadPage = function(href) {
  var xmlhttp = new XMLHttpRequest();
 
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
 
  return xmlhttp.responseText;
}
