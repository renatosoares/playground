<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
<!--    <link href="css/bootstrap.min.css" rel="stylesheet">-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<h1>Hello, world!</h1>
<?php
foreach (new DirectoryIterator(__DIR__) as $file) {
    if ($file->isFile()) {
        print "<a href='" . $file->getFilename() . "'>" . $file->getFilename() . "</a><br><br>";
    }
}
?>

<form action="/" method="post">
    <div class="test">
        test1 <input type="checkbox" name="test1" id="test1">
        test2 <input type="checkbox" name="test2" id="test2">
        test3 <input type="checkbox" name="test3" id="test3">
        test4 <input type="checkbox" name="test4" id="test4">
    </div>
    <input type="submit" value="enviar">
</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!--<script src="js/bootstrap.min.js"></script>-->
<script>
        $(".test input:checkbox").prop('required', true);
        $(".test input:checkbox").change(function () {
            if ($(".test input:checkbox:checked").length !== 0) {
                $(".test input:checkbox").prop('required', false);
            }
            if ($(".test input:checkbox:checked").length === 0) {
                $(".test input:checkbox").prop('required', true);
            }
        });
        if ($(".test input:checkbox:checked").length !== 0) {
            $(".test input:checkbox").prop('required', false);
        }
</script>

</body>
</html>