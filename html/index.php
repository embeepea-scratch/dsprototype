<?php

$categories =
    array(
          array( 'name' => 'Snow',    'value' => 'Snow',    'selected' => false, 'disabled' => false ),
          array( 'name' => 'Drought', 'value' => 'Drought', 'selected' => true,  'disabled' => false )
          );

$years = 
  array(
        array( 'name' => '2001', 'value' => '2001', 'selected' => true,  'disabled' => false ),
        array( 'name' => '2010', 'value' => '2010', 'selected' => false, 'disabled' => true ),
        array( 'name' => '2013', 'value' => '2013', 'selected' => false, 'disabled' => false )
        );

$months =
  array(
        array( 'name' => 'February', 'value' => '02', 'selected' => false,  'disabled' => true ),
        array( 'name' => 'May',      'value' => '05', 'selected' => true,   'disabled' => false ),
        array( 'name' => 'June',     'value' => '06', 'selected' => false,  'disabled' => false )
        );

$days =
  array(
        array( 'name' => '05', 'value' => '05', 'selected' => false, 'disabled' => true),
        array( 'name' => '09', 'value' => '09', 'selected' => false, 'disabled' => true),
        array( 'name' => '15', 'value' => '15', 'selected' => true,  'disabled' => false),
        array( 'name' => '18', 'value' => '18', 'selected' => false, 'disabled' => true),
        array( 'name' => '22', 'value' => '22', 'selected' => false, 'disabled' => false)
        );



function print_select_options($options) {
  foreach ($options as $option) {
    printf("<option value=\"%s\" %s %s>%s</option>\n",
           $option["value"],
           $option["selected"] ? 'selected=""' : '',
           $option["disabled"] ? 'class="ds-disabled" disabled=""' : '',
           $option["name"]);
  }
}

include "index.tpl.php";
