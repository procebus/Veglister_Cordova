function getXDomainRequest() {
						var xdr = null;

						if (window.XDomainRequest) {
								xdr = new XDomainRequest(); 
						} else if (window.XMLHttpRequest) {
								xdr = new XMLHttpRequest(); 
						} else {
								alert("Votre navigateur ne gère pas l'AJAX cross-domain !");
						}

						return xdr;        
				}


var sendData = function() {
		var xdr = getXDomainRequest();
		xdr.onload = function() {
				alert('erreur :'+xdr.responseText);
		}
		var del_idLieu = document.getElementById('hidden_idLieu').value;
		xdr.open("POST", "http://www.raahbeta.net/veglister/fonctions/sqldeleteLieu.php");
		xdr.send(del_idLieu);
}



var deleteLieu = function()
{
	
	
	var del_idLieu = document.getElementById('hidden_idLieu').value;

	
	var xhr=creerObjet();
	function creerObjet()
	{
	 var b;
	 var nv=navigator.appName;
	 if(nv=="Microsoft Internet Explorer")
		 b=new ActiveXObject('Microsoft.XMLHTTP');
	 else 
		 b=new XMLHttpRequest();
	 
	 return b;
	}
	
	xhr.open('post','http://www.raahbeta.net/veglister/fonctions/sqldeleteLieu.php',true);
	
	var data=del_idLieu;
	//alert(data);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	
	xhr.send(data);
	
	xhr.onreadystatechange=function(){
		
		if(xhr.readyState==1)
			document.getElementById('log').innerHTML=" chargement en cours....";
		if(xhr.readyState==4)
			if(xhr.status==200)
				document.getElementById('log').innerHTML=xhr.responseText;
			else document.getElementById('log').innerHTML="erreur sur la page"+xhr.status;
		else document.getElementById('log').innerHTML="erreur sur le chargement "+xhr.readyState;
		
	}
	
	
	

}