<html>
	<head>
		<title>Get Youtube API</title>
	</head>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<body>
		<div class="container">
			<div class="row breadcrumb">
				<h1 class="brand-title">Youtube API</h1>
				<form action="#" class="form-horizontal">
					<div class="col-md-8 col-md-offset-1">
						<input id="search" type="text" class="form-control" placeholder="Search...">
					</div>
					<div class="col-md-2">
						<input type="submit" class="form-control" value="Search">
					</div>
				</form>
				<div id="results"></div>
			</div>
		</div>
	</body>
	<script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
	<script src="js/tplawesome.js"></script>
	<script src="js/script.js"></script>
	<script src="https://apis.google.com/js/client.js?onload=init"></script>
</html>