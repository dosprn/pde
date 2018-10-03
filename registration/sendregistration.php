<!DOCTYPE html>
<html lang=en>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="/styles.css"/>
<title>Paving Design Expert</title>
</head>
<body>
<div class="marginpanel">

<div class="marginpanel">
<div class="titlepanel">
<span style="float : left">Paving Design Expert 2.2</span>
<h1>Registration</h1>
</div>
</div>

<div class="marginpanel">
<div class="alonecontentpanel">

<?php 
if (mail('support@paving-expert.com', 'Registration', 
        "Name/title: ".htmlspecialchars($_REQUEST['regname'])."\r\n".
        "email: ".htmlspecialchars($_REQUEST['regemail'])."\r\n".
        "Request code: ".htmlspecialchars($_REQUEST['requestcode']),
        'Content-Type: text/plain; charset=utf-8')) 
{
  echo "Request are sent successfully.";
} else {
  echo "Error. Try again.";
}  
?>
</div>
</div>

</div>
</body>
</html>
