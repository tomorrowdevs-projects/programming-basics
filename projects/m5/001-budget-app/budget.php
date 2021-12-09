<?php 

class Categories {
    public $name;
    public $ledger = [];
    public $totalAmount;

    public function __construct($name) {
        $this->name = $name;
    }

    public function deposit($amount, $description = "") {
        $this->totalAmount = $amount;
        $depositResult = array("amount" => $amount, "description" => $description);
        array_push($this->ledger, json_encode($depositResult));
    }

    public function withdraw($amount, $description = "") {
        $this->totalAmount -= $amount;
        $depositResult = array("amount" => -$amount, "description" => $description);
        array_push($this->ledger, json_encode($depositResult));
    }
}
//def create_spend_chart(categories):

?>




