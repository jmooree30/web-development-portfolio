<?php 
if(isset($_POST['submit'])){
    $to = "jmooree30@gmail.com";
    $from = $_POST['email'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    header('Location: index.html');
    }
?>

<!DOCTYPE html>
<head>
<title>Contact</title>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="contact.css">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.html"><strong>Jacob Moore</strong></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="https://github.com/jmooree30"><strong>Github</strong></a></li>
        <li><a href="resume.pdf" target="_blank"><strong>Resume</strong></a></li>
        <li><a href="contact.php"><strong>Contact</strong></a></li>
      </ul>
    </div>
  </div>
</nav> 

<div class="container" id="max">
  <h3><strong>Contact Me</strong></h3><br>
  <div class="center">
   <a href="https://github.com/jmooree30"><i class="fa fa-github"></i></a>
    <a href="https://www.facebook.com/jacob.moore.796"><i class="fa fa-facebook-official"></i></a>
    <a href="https://angel.co/jacob-moore-7?public_profile=1"><i class="fa fa-angellist"></i></a>
  </div>
<form action="" method="post">
<strong>First Name:</strong><br> <input type="text" name="first_name" placeholder="John" required><br>
<strong>Last Name:</strong><br> <input type="text" name="last_name" placeholder="Doe" required><br>
<strong>Email:</strong><br> <input type="text" name="email" placeholder="johndoe@gmail.com" required><br>
<strong>Message:</strong><br><textarea rows="5" name="message" cols="30"></textarea><br>
<input type="submit" name="submit" value="Submit" required>
</form>
</div>

</body>
</html> 

