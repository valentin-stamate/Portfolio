<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libraries/PHPMailer/PHPMailer.php';
require 'libraries/PHPMailer/Exception.php';
require 'libraries/PHPMailer/SMTP.php';


$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
if (strlen($name)<4) {
	die('<div class="text-danger">Invalid Name: Please Enter Your Name');
} elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
	/*$status = "Invalid Email";*/
	die('<div class="text-danger">Invalid Email</div>');
} elseif (strlen($message)<10) {
	die('<div class="text-danger">Invalid Message: Enter at least 10 letters</div>');
}


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
	    //Server settings
	$mail->SMTPDebug = 0;
	$mail->isSMTP();
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'ssl';
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = '465';
	$mail->isHTML();
	$mail->Username = 'your_email';
	$mail->Password = 'your_email_password';
	$mail->SetFrom('no-reply@howyocode.org');
	$mail->Subject = 'CV Site';
	$mail->Body = 'From: <b>' . $email ."</b>" ."<p>" .$message."</p>";
	$mail->AddAddress('your_email');
	$mail->addReplyTo($email, $name);

	$mail->Send();
	echo '<div class="text-success">Message has been sent</div>';
} catch (Exception $e) {
   	echo '<div class="text-danger">Message could not be sent.</div>', $mail->ErrorInfo;
   	/*echo '<font class="text-danger">Message could not be sent. Mailer Error: ', $mail->ErrorInfo;*/
}
