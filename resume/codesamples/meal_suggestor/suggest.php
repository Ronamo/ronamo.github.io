<?php
header("Cache-Control: no-cache");
$meats = file("meats.txt");
$sides = file("sides.txt");

echo "Might I suggest<br/>";
echo "<span class='meat'>" . $meats[rand(0,count($meats)-1)] . "</span> with ";
echo "<span class='side'>" . $sides[rand(0,count($sides)-1)] . "</span>";
echo "?"
?>