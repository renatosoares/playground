<?php
class Customer {
    var $name, $street, $city, $state, $zipCode, $phone;

    function Customer($name, $street, $city, $state, $zipCode, $phone) {
        $this->name = $name;
        $this->street = $street;
        $this->city = $city;
        $this->state = $state;
        $this->zipCode = $zipCode;
        $this->phone = $phone;
    }

    function getName() {
        return $this->name;
    }

    function getAddress() {
        return $this->street . "\n" .
        $this->city . ", " .
        $this->state . " " .
        $this->zipCode;
        $this->phone;
    }
    function getPhone(){
        return $this->phone;
    }
}

// Set up some addresses to use
$customers[0] = new Customer("Doug Henderson",
    "7804 Jumping Hill Lane",
    "Dallas", "Texas", "75218", "123");
$customers[1] = new Customer("Mary Jenkins",
    "7081 Teakwood #24C",
    "Dallas", "Texas", "75182", "321");
$customers[2] = new Customer("John Jacobs",
    "234 East Rutherford Drive",
    "Topeka", "Kansas", "66608", "231");
$customers[3] = new Customer("Happy Traum",
    "876 Links Circle",
    "Topeka", "Kansas", "66608", "132");

// Pick a customer
//srand((double)microtime() * 1000000);
//$customerId = rand(0,3);
//$customer = $customers[$customerId];
$customer;
$phone = preg_replace("/[^0-9]/", "", $_REQUEST['phone']);
foreach ($customers as $c) {

    if($phone == $c->getPhone()) {
     $customer = clone $c;
      break;
    }
}


echo $customer->getName() . "\n" .
    $customer->getAddress();
