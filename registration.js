
function Direct(form)
{
	var name = /^[A-Za-z ]+$/;
	var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var pssw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
	var bdcontrol =/(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19[0-9][0-9]|20[0,1][0-8]|2009)$)|(^29[/]02[/]((19)(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|(20)(00|04|08|12|16))$)/;
	
	
	var sday = form.bday.value.substring(0,2);
	var smonth = form.bday.value.substring(3,5);
	var syear = form.bday.value.substring(6,10);
	
	var day = parseInt(sday);
	var month = parseInt(smonth);
	var year = parseInt(syear);
	
	
	

	if(form.firstname.value == "")
	{
		alert("Please enter your name! ");
		form.firstname.focus();
		return false;
	}
	
	else if(form.firstname.value != "")
	{
		if(!name.test(form.firstname.value))
		{
			alert("Please use only uppercase and lowercase letters!!!");
			form.firstname.focus();
			return false;
		}
		
	}
	
	if(form.lastname.value == "")
	{
		alert("Please enter your surname! ");
		form.lastname.focus();
		return false;
	}
	
	else if(form.lastname.value != "")
	{
		if(!name.test(form.lastname.value))
		{
			alert("Please use only uppercase and lowercase letters!!!");
			form.lastname.focus();
			return false;
		}
		
	}
	
	if(form.email.value == "")
	{
		alert("Please enter your mail address! ");
		form.email.focus();
		return false;
	}
	
	else if(form.email.value != "")
	{
		if(!mail.test(form.email.value))
		{
			alert("Please use a valid mail address such as users@domain!!! You can use uppercase,lowercase,numerics and special characters.");
			form.email.focus();
			return false;
		}
		
	}
	
	if(form.passwrd.value == "")
	{
		alert("Please enter a password! ");
		form.passwrd.focus();
		return false;
	}
	
	
	
	else if(form.passwrd.value != "")
	{
		
		if(form.passwrd.value.length <6)
	{
		alert("Password is too short! It cannot be less than 6 characters. ");
		form.passwrd.focus();
		return false;
	}
		
		else if(!pssw.test(form.passwrd.value))
		{
			alert("Please use a valid password.");
			form.passwrd.focus();
			return false;
		}
		
	}
	
	if(form.bday.value.length < 10)
	{
		alert("Too short for a valid date!");
		form.bday.focus();
		return false;
	}
	
	
	if(!bdcontrol.test(form.bday.value))
	{
		alert("Please enter a valid date. (Ex:15/08/1995)");
		form.bday.focus();
		return false;
	}
	
	
	
		
	}
	
	
	
	


	



function ClearAll()
{
	
	document.getElementById('usrform').reset();
	
}