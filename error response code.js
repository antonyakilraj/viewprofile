	beforeSend: function(jqXHR, settings) 
	{
        jqXHR.url = settings.url;
    },
					
					
    error: function (jqXHR, status, error) 
	{
		if (jqXHR.status == 401) 
			{
       	
				document.getElementById("results").innerHTML="Sorry, your session has expired. Please login again to continue";
				window.location.href ="https://pi.zebra.com/ext/logout";
				window.location.href ="https://pi.zebra.com/idp/startSSO.ping?PartnerSpId=viewprofile_sp";
	
			}
		else 
			{
				document.getElementById("results").innerHTML="An "+status+" occurred:"+
				jqXHR.status + " " +error+ "<br><br>"+ window.location.href+jqXHR.url ;
		
			}
	}