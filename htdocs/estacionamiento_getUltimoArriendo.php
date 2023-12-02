<?php
require 'estacionamiento_conexion.php';
$result = $conn->query("SELECT * FROM arriendo ORDER BY id_arr DESC LIMIT 1" );
$data = array();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
}
else {
    echo "0 results";
}
$conn->close();
?>