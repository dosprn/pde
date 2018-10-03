<!DOCTYPE html>
<html lang=en>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="/styles.css"/>
<title>Paving Design Expert</title>
<style type="text/css">
input {
  border-width  : 1px; 
  border-style  : solid;
  border-color  : #E0E0E0;
  padding       : 2px 2px 2px 2px;
  border-radius : 4px 4px 4px 4px;
}
</style>
</head>
<body>
<div class="marginpanel">

<div class="marginpanel">
<div class="titlepanel">
<span style="float : left">Paving Design Expert 2.2</span>
<h1>Registration code request</h1>
</div>
</div>

<div class="marginpanel">
<div class="alonecontentpanel">

<form method="post" enctype="application/x-www-form-urlencoded" action="sendregistration.php">
<p>Name/title:<br><input name="regname" required size=50 type="text" value="<?php echo htmlspecialchars($_REQUEST['regname'])?>"></p>
<p>email:<br><input name="regemail" size=50 type="email" value="<?php echo htmlspecialchars($_REQUEST['regemail'])?>"></p>
<p>Request code:<br><input name="requestcode" required size=50 type="text" value="<?php echo htmlspecialchars($_REQUEST['requestcode'])?>"></p>
<p><input name="submit" type="submit" value="Send request"></p>
</form>

</div>
</div>
</div>

</body>
</html>
