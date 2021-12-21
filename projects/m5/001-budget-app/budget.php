<?php 


class Categories  {
    public $name;
    public $ledger = [];
    public $totalAmount;

    public function __construct($name) {
        $this->name = $name;
    }

    public function __toString() {
        $output_string = str_pad("{$this->name}", 40, "*", STR_PAD_BOTH);
        foreach($this->ledger as $value) {
        
        $decoded_array = json_decode($value);
        $output_string .= "<br/>" . "<div style='width:300px; position:relative'>" . $decoded_array->description . "<span style='text-align:right; position:absolute; right:0'> {$decoded_array->amount} </span>" . "</div>";
    };
        return $output_string;
    }

    public function deposit($amount, $description = "") {
        $this->totalAmount = $amount;
        $depositResult = array("amount" => $amount, "description" => $description);
        array_push($this->ledger, json_encode($depositResult));
    }

    public function withdraw($amount, $description = "") {
        if($this->check_funds($amount)) {
            $this->totalAmount -= $amount;
            $depositResult = array("amount" => -$amount, "description" => $description);
            array_push($this->ledger, json_encode($depositResult));
            return true;
        } else {
            return false;
        }
    }

    public function get_balance() {
        return $this->totalAmount;
    }

    public function transfer ($amount, $budget_category) {
        if($this->check_funds($amount)) {
            $this->withdraw($amount, "Trasfer to `{$budget_category->name}`");
            $budget_category->deposit($amount, "Trasfer from `{$this->name}`");
            return true;
        } else {
            return false;
        }
        
    }

    protected function check_funds($amount) {
        if($this->totalAmount < $amount) {
            return false;
        } else {
            return true;
        }
    }
}



function create_spend_chart($categories) {
    $output_string = "Percentage spent by category<br><table>";
    $sum = 0;
    $percentage = [];

    foreach($categories as $category) {
        $category_array = $category->ledger;
        foreach($category_array as $value) {
            
            $decoded_array = json_decode($value);
            if($decoded_array->amount < 0) {
                $sum += $decoded_array->amount;
            } else {
            $total = $decoded_array->amount;
            }
        };
        array_push($percentage, (abs($sum / $total) * 100));
        for($i=100; $i>=0; $i-=10) {
            $output_string .= "<tr style='text-align:right'><td>" . $i  . "|</td>";
            foreach($percentage as $value) {
                
                if($value == $i) {
                    $output_string .= "<td>";
                    for($j=$i; $j>=0; $j-=10) {
                        //$output_string .= "<tr style='text-align:right'><td>" . $j . "| </td><td>0</td></tr>";
                        $output_string .= "<td style='text-align:right'>0</td>";
                    }
                    break;
                } 
        }
    }
    

    
        
    }
    
    $output_string .= "</table>";

    return $output_string;
}
//def create_spend_chart(categories):

?>




