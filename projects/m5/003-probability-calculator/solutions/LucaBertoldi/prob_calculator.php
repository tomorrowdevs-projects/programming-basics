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
        $this->content = json_encode($this->content);
    }

    public function draw(int $ball) {
        $content = json_decode($this->content);
        if($ball > count($content)) {
            $ball = count($content);
        }
        $pick = [];
        $random_pick = array_rand($content,$ball);

        for($i=0; $i < $ball; $i++) {
            array_push($pick, $content[$random_pick[$i]]);
            unset($content[$random_pick[$i]]);
        }
     
        return $pick;
    }
}

function experiment($hat=null, $expected_balls=null, $num_balls_drawn=null, $num_experiments=null) {
    $counter = 0;
    
    for($i=0; $i < $num_experiments; $i++) {
        $pick = $hat->draw($num_balls_drawn);
        $real_pick = array_count_values($pick);
        
        $expected_pick = json_decode($expected_balls, true);

        if(count(array_intersect_assoc($real_pick, $expected_pick)) === count($expected_pick)) {
            $counter +=1;
        };
    }
    
    return $counter/$num_experiments * 100 . "%";
};





?>