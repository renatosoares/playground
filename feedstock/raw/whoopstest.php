<?php
/**
 * Created by PhpStorm.
 * User: renato
 * Date: 08/06/17
 * Time: 09:47
 */

require __DIR__ . '/vendor/autoload.php';

$whoops = new \Whoops\Run;
$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
$whoops->register();