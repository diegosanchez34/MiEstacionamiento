<?php
require 'estacionamiento_conexion.php';
$result = $conn->query("SELECT * FROM estacionamiento INNER JOIN direccion ON estacionamiento.id_dir = direccion.id_dir  INNER JOIN dueno ON estacionamiento.run_due = dueno.run_due" );
$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
echo json_encode($data);
?>