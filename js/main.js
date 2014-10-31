(function () {
	/* lorsque le periférique est pret */
	 document.addEventListener("deviceready", onDeviceReady, false);
	 function onDeviceReady() 	{ }
		 
		/* recuperation des données via json*/
	
		$(document).on('pageinit', '#section_listePrincipale', function(){      
			$.ajax({
				url: "http://raahbeta.net/veglister/fonctions/sqltojson.php",
				dataType: "jsonp",
				jsonp: 'jsoncallback',
				//timeout: 5000,
				async: true,
				success: function (result) {
					ajax.parseJSONP(result);
				},
				error: function (request,error) {
					alert('Network error has occurred please try again!');
				}
			});         
		});

		$(document).on('pagebeforeshow', '#section_Lieu', function(){  
			
			$('#ul_lieuInfos').empty();
			$.each(LieuInfo.result, function(i, row) {
				if(row.id == LieuInfo.id) {
					
					document.getElementById('hidden_idLieu').value = row.id;
					$('#ul_lieuInfos').append('<li>Nom : '+row.nom+'</li>');
					$('#ul_lieuInfos').append('<li>Type: '+row.type+'</li>');
					$('#ul_lieuInfos').append('<li>Date : '+row.date+'</li>');
					$('#ul_lieuInfos').append('<li>Adresse : '+row.adresse+'</li>');   
					$('#ul_lieuInfos').append('<li>Tel : '+row.tel+'</li>');
					$('#ul_lieuInfos').append('<li>e-MAil : '+row.mail+'</li>');
					$('#ul_lieuInfos').append('<li>site Internet : '+row.url+'</li>');
					$('#ul_lieuInfos').append('<li>Commentaire : '+row.commentaire+'</li>');  
					$('#ul_lieuInfos').listview('refresh');            
				}
			});    
		});

		$(document).on('vclick', '#ul_listeDesLieux li a', function(){  
					
			LieuInfo.id = $(this).attr('data-id');
			$.mobile.changePage( "#section_Lieu", { transition: "slide", changeHash: false });
		});

		var LieuInfo = {
			id : null,
			result : null
		}
		var ajax = {  
			parseJSONP:function(result){ 
				
				LieuInfo.result = result.results;
				$.each(result.results, function(i, row) {
					
					//console.log(JSON.stringify(row));
					$('#ul_listeDesLieux').append('<li><a href="" data-id="' + row.id + '">' + row.nom + '</a></li>');
				});
				$('#ul_listeDesLieux').listview('refresh');
			}
		}
		
		
	/* suppression d'un lieu */
			
			/*$( document ).on( "mobileinit", function() {
			// We want popups to cover the page behind them with a dark background
				$.mobile.popup.prototype.options.overlayTheme = "b";
				// Set a namespace for jQuery Mobile data attributes
				//$.mobile.ns = "jqm-";
			});*/
		
		
			$("#btn_delLieu").click(function(){
							/*$.post(
									 'http://raahbeta.net/veglister/fonctions/sqldeleteLieu.php',
									 {
										del_idLieu:document.getElementById('hidden_idLieu').value,
																			 	
									 },
									 function(data){alert(data);}
									 
							);*/
				
							var id = document.getElementById('hidden_idLieu').value;
							//alert(del_idLieu);
							$.ajax({
								//url: "http://raahbeta.net/veglister/fonctions/sqldeleteLieu.php",
								url: "http://raahbeta.net/veglister/fonctions/testAjax.php",
								type: "POST",
								//crossDomain: true,
								data: id,
								async: 'true',
								//dataType: "json",
								success:function(result){
									alert('log : '+result);
								},
								error:function(xhr,status,error){
									alert('erreur : '+status);
								}
    						});
				
				
				
				
			});
	
			$('#form').submit(function(){
				
				var postData = $(this).serialize();

				$.ajax({
					type: 'POST',
					data: postData,
					url: 'http://raahbeta.net/veglister/fonctions/insertLieu.php',
					success: function(data){
						console.log(data);
						alert('Your comment was successfully added');
					},
					error: function(data){
						console.log(data);
						alert('There was an error adding your comment');
					}
				});

				return false;
			});
			
				
	
	
	
	/*$.ajax({
        url: "your url which return json",
        type: "POST",
        crossDomain: true,
        data: data,
        //dataType: "json",
        success:function(result){
            alert(JSON.stringify(result));
        },
        error:function(xhr,status,error){
            alert(status);
        }
    });*/
			/*$.ajax({
    url: 'https://www.googleapis.com/moderator/v1/series?key='+key,
    data: myData,
    type: 'GET',
    crossDomain: true, // enable this
    dataType: 'jsonp',
    success: function() { alert("Success"); },
    error: function() { alert('Failed!'); },
    beforeSend: setHeader
});*/
	
	
	/* Autres fonctions */
	
}());




