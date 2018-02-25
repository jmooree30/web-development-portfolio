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
      </ul>
    </div>
  </div>
</nav> 

<div class="container" id="max">
  <h3>Contact Me</h3><br>
<form action="" method="post">
First Name:<br> <input type="text" name="first_name" placeholder="John" required><br>
Last Name:<br> <input type="text" name="last_name" placeholder="Doe" required><br>
Email:<br> <input type="text" name="email" placeholder="johndoe@gmail.com" required><br>
Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
<input type="submit" name="submit" value="Submit" required>
</form>
</div>

</body>
</html> 

