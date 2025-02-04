<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://login.salesforce.com/services/oauth2/token',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('username' => 'operations@webduratech.com','password' => 'WDConfident@OCT2024','grant_type' => 'password','client_id' => '3MVG9fe4g9fhX0E4tB36KneAv0gETP.RoFSznw_lqmE03PIFS1_nZGOyjoutjE0pq_9y9tdA13l3ahAkS2yHU','client_secret' => 'C9842F473526F5E0531CF3816FB699F991925D454A87E9228A97603EC9E27B8A'),
  CURLOPT_HTTPHEADER => array(
    'Cookie: BrowserId=j2K2Cb9KEe6xucFojdpHAg; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
//echo $response;

// Decode JSON response
$json_response = json_decode($response, true);

// Access the access_token
if (isset($json_response['access_token'])) {
    $access_token = $json_response['access_token'];
   // echo $access_token;
   

$curl_lead = curl_init();

curl_setopt_array($curl_lead, array(
  CURLOPT_URL => 'https://confident.my.salesforce.com/services/data/v55.0/sobjects/Lead/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
CURLOPT_POSTFIELDS =>'{
"FirstName":"'.$_POST['fname'].'",
"LastName" : "'.$_POST['fname'].'",
"Company" : "Webdura",
"Lead_Source__c":"'.$_POST['utm_source'].'",
"Ad_Name__c": "'.$_POST['utm_term'].'",
"Ad_Set_Name__c" : "'.$_POST['utm_medium'].'",
"Campaign_Name__c":"'.$_POST['utm_campaign'].'",
"Email":"'.$_POST['email'].'",
"MobilePhone":"'.$_POST['phone'].'",
"Alternative_Mobile_Number__c":"'.$_POST['whatsapp_number'].'",
"Preferred_City__c":"'.$_POST['location'].'"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: Bearer '.$access_token.'',
    'Cookie: BrowserId=j2K2Cb9KEe6xucFojdpHAg; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  ),
));


$lead_response = curl_exec($curl_lead);

curl_close($curl_lead);
echo $lead_response;





} else {

echo "Failed to get access token.";
    
}

?>
