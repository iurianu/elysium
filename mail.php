<?php
$name = $_POST['name'];
$inv = $_POST['invitati'];
$date = $_POST['date'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = "Nume: ".$name.", ".
		   "Numar invitati: ".$inv.", ".
			 "Data: ".$date.", ".
		   "Telefon: ".$tel.", ".
		   "Adresa Email: ".$email;
$content="De la: $name \n Email: $email \n Mesaj: $message";
$recipient = "iulianandriescu@yahoo.co.uk";
$mailheader = "De la: $email \r\n";
mail($recipient, $name, $content, $mailheader) or die("Error!");
header("Location:lp.html");
?>
