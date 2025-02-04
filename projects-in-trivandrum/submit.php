<?php
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting( E_ALL );
	define("_URL_","https://www.confident-group.com/campaign/projects-in-thrissur");
	if(isset($_POST["form-type"])){
		
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$projectid = @$_POST['prj-name'];
		
		if($projectid == 1){
			$project = 'Ebony';
		}elseif($projectid == 2){
			$project = 'Lotus';
		}elseif($projectid == 3){
			$project = 'Maple';
		}

		switch($_POST["form-type"]){
			case '1':
				$subject = 'New Enquiry Confident-Group Project - '.$project;
			break;
			case '2':
				$subject = 'New Enquiry Confident-Group - Download Brochure - '.$project;
			break;
			case '3':
				$subject = 'New Enquiry Confident-Group - Footer Form';
			break;
		}
		$body = "Name: ".$name. " \n\nEmail: ".$email ."\n\nContact Number:" .$phone;
		
		$from_email = 'info@confident-group.com';
		$emailTo = 'ajay.confident@gmail.com,analysedigitalc@gmail.com';
		//$emailTo = 'anish.hexad@gmail.com';
		
		$headers = "Bcc: leads@analysedigital.com,vishnu.maniyan@analysedigital.com\r\n";
		$headers .= 'From:' .$name.' <'.$from_email.'>';
		//echo $body;
		//echo $subject;die;
		$val = mail($emailTo,$subject, $body, $headers);
		if($val == 1){
			$response['output'] = 1;
			$response['form_type'] = $_POST["form-type"];
			$response['url'] = _URL_;
			$response['project'] = $projectid;
		}else{
			$response['output'] = -1;
		}
		echo json_encode($response);exit;

	}
	
?>