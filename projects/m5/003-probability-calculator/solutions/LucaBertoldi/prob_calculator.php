<?php

class Hat {
    
    public function __construct(int ...$argv) {
        $content= [];
        if(count($argv) === 0) {
            echo "false";
            return;
        }
        foreach($argv as $key => $value) {
            for($i=0; $i < $value; $i++) {
                array_push($content, $key);  
            }
        }
    }
}

$hat = new Hat(red:3, blue:4);



?>