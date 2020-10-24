function formSubmit(){
    var all_validation = "Yes";
    var name = document.forms["registrationForm"]["fullName"].value;
    if (name == "") {
        alert("Name must be filled out");
        all_validation = "No";
    return false;
    }
    var add1 = document.forms["registrationForm"]["address1"].value;
    if (add1 == "") {
        alert("Address1 must be filled out");
        all_validation = "No";
    return false;
    }
    var add2 = document.forms["registrationForm"]["address2"].value;
    if (add2 == "") {
        alert("Address2 must be filled out");
        all_validation = "No";
    return false;
    }
    var city = document.forms["registrationForm"]["city"].value;
    if (city == "") {
        alert("City must be filled out");
        all_validation = "No";
    return false;
    }
    var state = document.forms["registrationForm"]["state"].value;
    if (state == "") {
        alert("State must be filled out");
        all_validation = "No";
    return false;
    }
    var zip = document.forms["registrationForm"]["zip"].value;
    if (zip == "") {
        alert("Zip must be filled out");
        all_validation = "No";
    return false;
    }
    var country = document.forms["registrationForm"]["country"].value;
    if (country == "") {
        alert("Country must be filled out");
        all_validation = "No";
    return false;
    }
    var email = document.forms["registrationForm"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        all_validation = "No";
    return false;
    }
    var phone = document.forms["registrationForm"]["phoneNo"].value;
    if (phone == "") {
        alert("Phone must be filled out");
        all_validation = "No";
    return false;
    }
    if(all_validation = "Yes"){
        alert("Thank You")
    }

}