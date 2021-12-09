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
        $this->check_funds($amount);
        $this->totalAmount -= $amount;
        $depositResult = array("amount" => -$amount, "description" => $description);
        array_push($this->ledger, json_encode($depositResult));
    }

    public function get_balance() {
        return $this->totalAmount;
    }

    public function transfer ($amount, $budget_category) {
        $this->check_funds($amount);
        $this->withdraw($amount, "Trasfer to `{$budget_category->name}`");
        $budget_category->deposit($amount, "Trasfer from `{$this->name}`");
    }

    private function check_funds($amount) {
        if($this->totalAmount < $amount) {
            return false;
        } else {
            return true;
        }
    }
}

//def create_spend_chart(categories):

?>




