<?php
class BaseController{

    public function views($view, $data = []){
        extract($data);
        ob_start();
        $content = ob_get_clean();
        require_once 'Views/layout.php';
        require_once 'Views/'.$view;

    }
    
    public function redirect($uri){
        header('Location:' . $uri);
        exit();
    }
}