<?php
class Database
{
    private $pdo;
    function __construct()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname="mvc";
        try {
            $this-> pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
    public function query($sql,$params = []){
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }
}
