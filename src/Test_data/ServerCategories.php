<?php 

header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json");
$datos=  file_get_contents("datos.json");
$categorias= [];
$cats= array_reduce(   json_decode($datos),  function( $anterior, $item){
  

    $encontrado =  array_search( $item->{'categoria'} , $anterior);
   
    if( $encontrado   !==  FALSE )
   {  
    return $anterior;
}
    else {
        array_push( $anterior,   $item->{'categoria'}  );
      return $anterior;
    }

},  []);
 
echo  json_encode( $cats );
