<?php
// Read the existing JSON file
$json = file_get_contents("etatsRelais.json");

// Parse the JSON data
$data = json_decode($json, true);

if(isset($_GET['relai'])){
	$nom = "RELAI".$_GET['relai'];
	$data[$nom] = $_GET['etat'];
}


// Convert the modified data back to JSON
$json = json_encode($data);

//var_dump($data);
// Write the JSON data back to the file
if(file_put_contents("etatsRelais.json", $json)){
echo("OK");
}

?>