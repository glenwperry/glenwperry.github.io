<?php
<<<<<<< HEAD

## CONFIG ##

# LIST EMAIL ADDRESS
$recipient = "enter the lists email address here";

# SUBJECT (Subscribe/Remove)
$subject = "Subscribe";

# RESULT PAGE
$location = "enter the URL of the result page here";

## FORM VALUES ##

# SENDER - WE ALSO USE THE RECIPIENT AS SENDER IN THIS SAMPLE
# DON'T INCLUDE UNFILTERED USER INPUT IN THE MAIL HEADER!
$sender = $recipient;

# MAIL BODY
$body .= "Name: ".$_REQUEST['Name']." \n";
$body .= "Email: ".$_REQUEST['Email']." \n";
# add more fields here if required

## SEND MESSGAE ##

mail( $recipient, $subject, $body, "From: $sender" ) or die ("Mail could not be sent.");

## SHOW RESULT PAGE ##

header( "Location: $location" );
?>
=======
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
fwrite($save,"$email]\r\n");
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
>>>>>>> origin/master
