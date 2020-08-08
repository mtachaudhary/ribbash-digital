<?php

$email = $_POST["email"];
$name = $_POST["full-name"];
$website = $_POST["website"];
$message = $_POST["message"];

$to = "hello@ribbash.com";
$subject = "Ribbash Digital Contact Form";

$headers  = "From: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
//Set the content-type to html
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$body  = "<html><body>";
$body .= "<b>Name: </b>$name <br/>
<b>Email: </b>$email <br/>
<b>Website: </b>$website <br/>
<b>Message: </b>$message";
$body .= "</body></html>";


if (mail($to, $subject, $body, $headers)) {
    //redirect to the 'thank you' page
    header('Location: ../thank-you.html');
} else {
    echo "Email sending failed...";
}

?>