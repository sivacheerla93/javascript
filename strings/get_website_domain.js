function getWebsiteDomain() {
    var website = document.getElementById("addWebsite").value;

    if (website == "") {
        alert("Enter Web URL!")
    }

    document.getElementById("resWebDomain").value = website.substring(website.lastIndexOf("."));
}