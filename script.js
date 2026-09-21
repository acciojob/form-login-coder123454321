const first_name=document.getElementsByName("fname");
const Last_Name=document.getElementsByName("lname");
function getFormvalue() {
    //Write your code here
	const f_name=first_name[0].value;
	const l_name=Last_Name[0].value;
	 alert(
        f_name + " " + l_name
		 )

}
