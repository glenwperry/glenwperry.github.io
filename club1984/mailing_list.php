<?php
$filename = "members.txt";
$fd = fopen ($filename, "r");
$contents = fread ($fd, filesize ($filename));
fclose ($fd);
if(strstr($contents,$email)) { 
print "You're already subscribed to this mailing list.";
}
else {
echo "Thank you $email for joining the mailing list";
if (!$save = fopen("members.txt","a")) {
exit;
}
fwrite($save,"$_POST["email"]\r\n");
fclose($save);
if (!$save = fopen("members.txt","a")) {
exit;
}
fwrite($save,"$name\r\n");
fclose($save);
mail("$email", "Fairview HiFi News Letter", "Welcome to the Fairview HiFi mailing list. Your exclusive source for product and promotional news and events.",
     "From: Newsletter@FairviewHiFi.com\r\n"
    ."Reply-To: NOREPLY@FairviewHiFi.com\r\n"
    ."X-Mailer: PHP/" . phpversion());
}
?>