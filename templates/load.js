var load = function (doc) {
  'use strict';
  
  if (!window.XMLHttpRequest && 'ActiveXObject' in window) {
    window.XMLHttpRequest= function() {
        return new ActiveXObject('MSXML2.XMLHttp');
    };
  }
  
  var xmlhttp = new XMLHttpRequest();
  
  xmlhttp.open("GET", "/templates/navbar.html", true);
  
  xmlhttp.onreadystatechange = function() {
    if (this.readyState!==4 || this.status !== 200) {
      doc.getElementByID('navbar').innerHTML = "<b> Error reading navbar.html </b>";
      return;
    }
    
    doc.getElementById('navbar').innerHTML = this.responseText;
  };
  
  xmlhttp.send();

  return xmlhttp.responseText;
  
  var xml = new XMLHttpRequest();
  
  xml.open("GET", "/templates/footer.html", true);
  
  xml.onreadystatechange = function() {
    if (this.readyState!==4 || this.status !== 200) {
      doc.getElementByID('footer').innerHTML = "<b> Error reading footer.html </b>";
      return;
    }
    
    doc.getElementById('footer').innerHTML = this.responseText;
  };
  
  xml.send();
  
  //Help from mazentheamazin
};
