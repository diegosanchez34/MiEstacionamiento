<?php
$servername = "127.0.0.1:4306";
$username   = "root";
$password   = "Victor@666#";
$dbname    = "estacionamiento";

$conn = new mysqli($servername,$username,$password,$dbname);

if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}
?>