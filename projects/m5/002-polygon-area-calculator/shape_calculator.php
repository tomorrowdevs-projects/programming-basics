<?php

class Rectangle {
    public function __construct(int $width, int $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function set_width(int $width) {
        return $this->width = $width;
    }

    public function set_height(int $height) {
        return $this->height = $height;
    }

    public function get_area() {
        return $this->width * $this->height;
    }

    public function get_perimeter() {
        return ($this->width * $this->height)*2;
    }

    public function get_diagonal() {
        return sqrt(pow($this->width, 2) + pow($this->height, 2));
    }

    public function get_picture () {
        $line = "";
        for($i = 0; $i < $this->height; $i++) {
            for ($j = 0; $j <= $this->width; $j++) {
                header('Content-type: text/plain');
                $line .= "*";
            }
            header('Content-type: text/plain');
            $line .= "\r\n";
        }
         
        return $line;
    }

    public function get_amount_inside ($shape) {
        $result = $this->get_area() / $shape->get_area();
        return $result;
    }

    
};


class Square extends Rectangle {
    public function __construct(int $side) {
        $this->side = $side;
        $this->_init_();
    }

    protected function _init_() {
        $this->width = $this->side;
        $this->height = $this->side;
    }

    public function set_width(int $width) {
        $this->width = $width;
        $this->height = $width;
    }

    public function set_height(int $height) {
        $this->width = $height;
        $this->height = $height;
    }
}

$rec = new Rectangle(4,8);
$square = new Square(4);
print_r($square->get_picture());

?>




