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
            $output_string .= 
            "<br/>" . 
            "<div style='width:300px; position:relative'>" 
            . substr($decoded_array->description,0,23) . 
            "<span style='text-align:right; position:absolute; right:0'>" 
            . substr(round($decoded_array->amount, 2),0,8) . 
            "</span></div>";
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
    $output_string = "<br><br>Percentage spent by category<br><table>";
    $percentage = [];
    foreach($categories as $category) {
        $percentage[$category->name] = findPercentage($category);
    }
    for($i=100; $i>=-10; $i-=10) {

        if($i === -10) {
            $output_string .= "<tr style='text-align:right'><td></td>";
        } else {
            $output_string .= "<tr style='text-align:right'><td>" . $i  . "|</td>";
        }
        
        
        foreach($percentage as $key => $value) {            
            $output_string = categoryNames($value, $i, $output_string, $key);
        }
        
    }         
    $output_string .= "</table>";

    return $output_string;
}

function findPercentage($category) {
    $sum = 0;
    $category_array = $category->ledger;
    foreach($category_array as $value) {
        $decoded_array = json_decode($value);
        if($decoded_array->amount < 0) {
            $sum += $decoded_array->amount;
        } else {
            $total = $decoded_array->amount;
        }
    };
    return (abs($sum / $total) * 100);
}

function categoryNames($value, $i, $output_string, $key) {
    if($value >= $i) {
        if($i == -10) {
            $output_string .= "<td style='text-align:left; writing-mode: vertical-lr;text-orientation: upright; border-top: 2px dashed black;'>" . $key . "</td>";
        } else {
            $output_string .= "<td style='text-align:right'>0</td>";
        }
       
    } else {
        $output_string .= "<td style='text-align:right'></td>";
    }

    return $output_string;
}
?>




