<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$payload =   file_get_contents("php://input");


$objectParam = $payload == "" ? NULL :  json_decode($payload);

$objectParam = json_decode($payload);
//filtrar categoria
if (is_null($objectParam)) // is_null($objectParam )
    require("datos.json");
else {

    $search_term = isset($objectParam->search_term) ? $objectParam->search_term : "";
    $categoria_a_buscar = isset($objectParam->categoria) ? $objectParam->categoria : "";
    $sub_categoria_a_buscar = isset($objectParam->subcategoria) ? $objectParam->subcategoria : "";

    $handlerFiltroCategoria = (function ($v, $k)  use ($categoria_a_buscar, $sub_categoria_a_buscar) {

        return $v->categoria == $categoria_a_buscar  &&  $v->subcategoria ==  $sub_categoria_a_buscar;
    });

    $handlerFiltroSearchTerm = (function ($v, $k)  use ($search_term) {
        $campos = get_object_vars($v);
        $almenosUno = false;
        foreach ($campos as $campo) {
            $almenosUno = preg_match("/.*$search_term.*/i",  $campo);
            if ($almenosUno) break;
        }
        return $almenosUno;
    });

    // $objectParam->categoria

    $archivo =  file_get_contents("datos.json");
    $arr = json_decode($archivo);

    //Seleccionar filtro
    $filtro= $handlerFiltroCategoria;

    if( $search_term != "" )
    $filtro=  $handlerFiltroSearchTerm;

    $filtrado =  array_filter(
        $arr,
        $filtro,
        ARRAY_FILTER_USE_BOTH
    );

    $filtrado2 =  array_map(function ($row) {

        $keyValues = get_object_vars($row);
        //  var_dump($keyValues);
        return $keyValues;
    },  $filtrado);


    $arregloLimpio =  [];
    foreach ($filtrado2 as $element) {

        array_push($arregloLimpio,  $element);
    }

    echo json_encode($arregloLimpio);
}
