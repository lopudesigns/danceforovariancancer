<?php
// Check for empty fields
if(
	empty($_POST['message'])
   )
   {
	echo "No arguments Provided!";
	return false;
   }
	
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'nikolaj_frey@hotmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Dance-o-thon enquiry";
$email_body = "You have received a new message from the Dance-o-thon fundraiser site.\n\n"."Here's their message:\n\nMessage:\n$message";
$headers = "From: noreply@ozledgrowlights.com.au\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.

mail($to,$email_subject,$email_body,$headers);
return true;			
?>