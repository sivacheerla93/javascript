function getEmailDomain() {
    var emailAddress = document.getElementById("addEmail").value;

    if (emailAddress == "") {
        alert("Enter email address!");
    }

    var email_part = emailAddress.substring(0, emailAddress.indexOf("@"));
    var domain_part = emailAddress.substring(emailAddress.indexOf("@") + 1);

    document.getElementById("resEmail").value = email_part;
    document.getElementById("resDomain").value = domain_part;
}