var load = function (doc) {
  'use strict';
  var xmlhttp = new XMLHttpRequest();
  
  xmlhttp.open("GET", "/templates/navbar.html", false);
  xmlhttp.send();

  return xmlhttp.responseText;
  
  doc.getElementById("navbar").innerHTML = xmlhttp.responseText;
  
  var xml = new XMLHttpRequest();
  
  xml.open("GET", "/templates/footer.html", false);
  xml.send();
  
  doc.getElementById("footer").innerHTML = xml.responseText;
};
