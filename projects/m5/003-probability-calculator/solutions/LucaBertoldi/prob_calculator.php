<?php

class Hat {
    public $content= [];

    public function __construct(int ...$argv) {
        
        if(count($argv) === 0) {
            echo "false";
            return;
        }
        foreach($argv as $key => $value) {
            for($i=0; $i < $value; $i++) {
                array_push($this->content, $key);  
            }
        }
    }

    public function draw(int $ball) {
        print_r($this->content);
        $pick = [];
        $random_pick = array_rand($this->content,$ball);

        for($i=0; $i < $ball; $i++) {
            array_push($pick, $this->content[$random_pick[$i]]);
            unset($this->content[$random_pick[$i]]);
        }
        return json_encode($pick);
    }
}

function experiment($hat, $expected_balls, $num_balls_drawn, $num_experiments) {

};

$hat = new Hat(red:2, blue:1);

$hat->draw(2);



?>