<?php
require 'estacionamiento_conexion.php';

if($_SERVER['REQUEST_METHOD'] === "POST"){
    $rawPostData = file_get_contents('php://input');
    $postData = json_decode($rawPostData, true);

    if($postData){
        $id_arr = $postData["id_arr"];
        $hora_inic = $postData["hora_inic"];
        $hora_fin = $postData["hora_fin"];
        $patente = $postData["patente"];
        $id_est = $postData["id_est"];

        $query = "INSERT INTO ARRIENDO(id_arr, hora_inic, hora_fin, patente, id_est) VALUES ('$id_arr','$hora_inic','$hora_fin','$patente','$id_est')";

        if(mysqli_query($conn, $query)){
            echo "Data inserted successfully";
        }
    }
}

?>