<?php
$users = array(
    1 => array(
        'id' => 1,
        'name' => 'lexa',
        'email' => 'lexa@mail.ru',
        'password' => '123lexa'
    )
)
?>
{{ json_encode($users) }}