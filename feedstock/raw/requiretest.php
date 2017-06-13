<?php
/**
 * Created by PhpStorm.
 * User: renato
 * Date: 09/06/17
 * Time: 08:43
 */


require __DIR__ . '/vendor/autoload.php';


// this will fail
$baz = new \Playground\Feedstock\Test();

$baz->hello();
echo "0";

