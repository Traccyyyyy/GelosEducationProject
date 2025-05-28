
function validate() {
    var re = /^\w+([\._-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const emailEl = document.getElementById("email");
    const phoneEl = document.getElementById("mobile");
    const fnameEl = document.getElementById("fname");
    const lnameEl = document.getElementById("lname");
    const enquiryEl = document.getElementById("enquiry");
    if (fnameEl.value == "") {
        let err1 = document.getElementById("err1");
        err1.innerHTML = ("First name can not be empty!");
        return false;
    }
    if (lnameEl.value == "") {
        let err2 = document.getElementById("err2");
        err2.innerHTML = ("Last name can not be empty!");

        return false;
    }
    if (phoneEl.value.length !==10) {
        let err3 = document.getElementById("err3");
        err3.innerHTML = ("Invalid phone number (must be a number with 10 digits)."+phoneEl.value.length );
        return false;
    }
    if (!re.test(emailEl.value)){
        let err4 = document.getElementById("err4");
        err4.innerHTML = ("Email address not valid");
        return false;
    }
    
    if (enquiryEl.selectedIndex == 0) {
        let err5 = document.getElementById("err5");
        err5.innerHTML = ("You must pick a class");
        return false;
    }
    if (!confirm("Please confirm the following:\nYour name is:" + fnameEl.value + " " + lnameEl.value
        + "\nYour mobile is:" + phoneEl.value
        + "\nMessage: " + emailEl.value
        + "\nYour enquiry: " + enquiryEl.value
        + "\nClick cancel to go back."
    )) {
        return false;
    }
    else {
        alert("Thanks for your enquiry, we will get back to you, " + fnameEl.value + " !");
        return true;
    }

}

