<?php
require 'estacionamiento_conexion.php';
$result = $conn->query("SELECT * FROM cliente");
$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
echo json_encode($data);
?>