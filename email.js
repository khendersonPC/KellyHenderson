var recipient = "";
var emailBodyText= "";

$(".recipient").change(function () {
    recipient = $(".recipient").val();
    var emailBodyText = "Hello "+recipient+", "+"\n"+"Action: "+action+"\n"+"Material: "+type+"\n"+"Quantity: "+quantity+"\n"+"Width: "+width+" inches";
    $(".emailBody").val(emailBodyText);

})

$(".emailButton").click(function () {
    var emailAddress = "";
    if (recipient=="Jason"){
        emailAddress = 'jasoncjorgensen@gmail.com'
    }else if (recipient=="Bret"){
        emailAddress = "kelly_cook1@msn.com"
    }

    Email.send({
        SecureToken: "857337be-b793-4d32-b8a9-297756c1eebb",
        To: "futsaldevotee@gmail.com",
        From: "inventory@hafabricators.com",
        Subject: action +" of "+type,
        Body: $(".emailBody").val()
    }).then(function (message) {
        $(".emailNotification").empty();
        console.log(message);
        if (message=="OK"){
            $(".emailNotification").append("<br>");
            $(".emailNotification").append("<p>"+"Email sent successfully!"+"</p>");
        }
        else {
            $(".emailNotification").append("<br>");
            $(".emailNotification").append("<p>"+"EMAIL ERROR"+"</p>")
        }
    })
 


});

