var resturantMeal = document.getElementById('resturant');
var breakfastMeal = document.getElementById('breakfast');
var launchMeal = document.getElementById('launch');
var subscribebtn = document.getElementById('subscribeID');
var sendNowbtn = document.getElementById('sendNowID');

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

var emailCheck1 = document.getElementById('emailList');
var nameCheck = document.getElementById('fullName');
var emailCheck = document.getElementById('emailID');
var messageCheck = document.getElementById('message');


var msgEmail = document.getElementById('msgEmail');
var msgName = document.getElementById('msgName');
var msgEmailMessage = document.getElementById('msgEmailMessage');
var msgMessage = document.getElementById('msgMessage');

resturantMeal.onclick = function() {
    breakfastMeal.style.cssText = ' color: black;  border-bottom: 2px solid #ddd;';
    launchMeal.style.cssText = ' color: black;  border-bottom: 2px solid #ddd;'
    resturantMeal.classList.add();
    div2.classList.remove('showDiv2');
    div3.classList.remove('showDiv3');
    if ((div1.classList.contains('hideDiv1'))) {
        div1.classList.add('showDiv1');
        resturantMeal.style.cssText = ' color: #821517;  border-bottom: 2px solid #821517;'
    }
}

breakfastMeal.onclick = function() {
    resturantMeal.style.cssText = ' color: black;  border-bottom: 2px solid #ddd;';
    launchMeal.style.cssText = ' color: black;  border-bottom: 2px solid #ddd;'

    div1.classList.remove('showDiv1');
    div1.classList.add('hideDiv1');
    div3.classList.remove('showDiv3');
    if (!(div2.classList.contains('hshowDiv2'))) {
        breakfastMeal.style.cssText = ' color: #821517;  border-bottom: 2px solid #821517;;'
        div2.classList.add('showDiv2');
    }
}

launchMeal.onclick = function() {
    resturantMeal.style.cssText = ' color: black;  border-bottom: 2px solid #ddd;';
    breakfastMeal.style.cssText = ' color: black;  border-bottom: 2px solid #ddd;'
    div1.classList.remove('showDiv1');
    div1.classList.add('hideDiv1');
    div2.classList.remove('showDiv2');
    if (!(div3.classList.contains('showDiv3'))) {
        div3.classList.add('showDiv3');
        launchMeal.style.cssText = ' color: #821517;  border-bottom: 2px solid #821517;'
    }
}

subscribebtn.onclick = function() {
    if (emailCheck1.value == "") {
        msgEmail.style.cssText = 'color: red; font-size: 12px; text-align: right; margin:auto; margin-left: 170px;';
        subscribebtn.style.cssText = "margin-top:-1px;"
        msgEmail.innerHTML = "من فضلك قم بادخال بريد التكروني";
    } else {
        alert("تم اشتراكك بهذا البريد الالكتروني  \n" + emailCheck1.value);
        emailCheck1.value = "";
        msgEmail.innerHTML = "";
        subscribebtn.style.cssText = "margin-top: 15px;"
    }
}



sendNowbtn.onclick = function() {
    var value1 = true;
    var value2 = true;
    var value3 = true;
    msgName.innerHTML = "";
    msgEmailMessage.innerHTML = "";
    msgMessage.innerHTML = "";
    if (nameCheck.value == "") {
        msgName.style.cssText = 'color: red; font-size: 12px; margin-left: 200px;';
        sendNowbtn.style.cssText = "margin-top:-6px;"
        msgName.innerHTML = "من فضلك قم بادخال الاسم";
        value1 = false;
    }
    if (emailCheck.value == "") {
        msgEmailMessage.style.cssText = 'color: red; font-size: 12px; margin-left: 165px;';
        sendNowbtn.style.cssText = "margin-top:-6px;"
        msgEmailMessage.innerHTML = "من فضلك قم بادخال بريد التكروني";
        value1 = false;
    }
    if (messageCheck.value == "") {
        msgMessage.style.cssText = 'color: red; font-size: 12px; margin-left: 200px;';
        sendNowbtn.style.cssText = "margin-top:-10px;"
        msgMessage.innerHTML = "من فضلك قم بادخال الرسالة ";
        value1 = false;
    }
    if (value1 && value2 && value3) {
        var txt;
        var r = confirm("هل تريد ارسال رسالة بالمعلومات التالية؟" + "\n" + "الاسم: " + nameCheck.value + "\n" + "البريد الالكتروني: " + emailCheck.value + "\n" + "نص الرسالة :" + messageCheck.value);
        if (r == true) {
            alert("تم ارسال الرسالة")
        } else {
            alert("تم الغاء ارسال الرسالة");
        }
        msgName.innerHTML = "";
        msgEmailMessage.innerHTML = "";
        msgMessage.innerHTML = "";
        nameCheck.value = "";
        emailCheck.value = "";
        messageCheck.value = "";
        sendNowbtn.style.cssText = "margin-top: 15px;"
    }
}