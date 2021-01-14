# PHP Comments  - 
* comments are used to basically make a notes that we don't want to execute with code.

* comments are two type // for single line and /* note */ for multilines code.

```
example - 
<?php
   // echo $variable;

     /* echo "This outputs a string.";
    echo "<p>You can also include HTML in an echo statement.</p>" */
?>
```
***

# 2)- PHP Variables 
* In PHP Variables are represented by a $ sign followed by the name of the variable and it's case-sensitive.

```
Example - 
<?php
$var = 'sat';
$Var = 'sam';
?>
```
***
# 3) - PHP Echo / Print 
* Echo / Print - They both for output data on screen. But the Difference between them is Echo can Take Mulitple Parameters Arguments and has no return value on the other side Print can only take One Argument and has return value 1. 

```
Example-
Echo- 
<?php
echo "Hello world!<br>"; 
?>
Print - 
<?php
print "hello world!<br>";
?>
```
***
# 4) - PHP Data Types -
* Different Data Types are used to hold different data types of value. PHP support 3 data Types which each of them have own small types.
## 1) Scalar Types - 
hold single value ( boolean, integar, float, string)
## 2) Compound type - 
hold mutilple values(array, object).
## 3) special Types - 
Resource and NULL

***

# 5) - PHP Strings -
* String is a sequence of Characters i.e used to store the Text. 4 types(Single Quoted,  Double quoted, Heredoc syntax, Newdoc syntax)
## PHP String Functions - 
there many string functions who provide access and to manipulate the strings.

### exmaple -
### print()- 
to output data on screen
### strlen() 
it used to count or return the length of  string 
```
<?php
echo strlen ("hii you"); // output 7
?>
```
### stripos()- 
* It is used to find the position of the first occurrence of a string inside another string.
```
<?php
echo stripos("PHP is Programming Language","is"); // output 4>
```

***
# 6) - PHP Numbers - types:
 ## PHP Integers - 
 a Number without decimals.
 ## PHP Floats -
  number with decimal points or a exponents
 ## 
 PHP Infinity- numeric value larger then PHP-Float i.e (1.9e411)
 ## PHP NaN- 
 It stands for not a number
 ## PHP Numerical Strings -
  it's used to find variable in numeric )

***
## 7)PHP Constants - 
Const is a name of value, the value which can not be redeclared in script.
```
example - 
<?php  
define("MESSAGE","Hello PHP");  
echo MESSAGE;  
?>  // output Hello PHP
```
## 8)PHP Operators-
* PHP Operator is a symbol i.e used to perform operations on operands. In simple words, operators are used to perform operations on variables or values. 
```
For example: 
$num=10+20;//+ is the operator and 10,20 are operands 
```
# Operator can be categorized in following:
1)Arithmetic Operators
2)Assignment Operators
3)Bitwise Operators
4)Comparison Operators
5)Incrementing/Decrementing Operators
6)Logical Operators
7)String Operators
8)Array Operators
9)Type Operators
10)Execution Operators
11)Error Control Operators


***
# 9)PHP If & Else & Elseif - 
## PHP if else statement is used to test condition

* PHP if- if one condition is true.
* PHP If-Else- PHP if-else statement is executed whether condition is true or false.
* PHP If-else-if - The PHP if-else-if is a special statement used to combine multiple if?.else statements. So, we can check multiple conditions using this statement.
***
# 10) - PHP Functions-
* PHP function is a piece of code that can be reused many times. It can take input as argument list and return value.

```
example-
function functionname(){  
//code   
} 
``` 

***
# 11)PHP Arrays - 
An array is a special variable, which can hold more than one value at a time. it's like a ordered map (contain value on basis of key)
There are 3 types of array in PHP.
## Indexed Array - 
```
<?php  
$season=array("summer","winter","spring","autumn");  
echo "Season are: $season[0], $season[1], $season[2] and $season[3]";  
?>  
``` 
## Associative Array-
```
<?php    
$salary=array("Sonoo"=>"350000","John"=>"450000","Kartik"=>"200000");    
echo "Sonoo salary: ".$salary["Sam"]."<br/>";  
echo "John salary: ".$salary["John"]."<br/>";  
echo "Kartik salary: ".$salary["karn"]."<br/>";  
?>  
```  
## Multidimensional Array-
```
<?php    
$emp = array  
  (  
  array(1,"sam",400000),  
  array(2,"john",500000),  
  array(3,"karn",300000)  
  );  
  
for ($row = 0; $row < 3; $row++) {  
  for ($col = 0; $col < 3; $col++) {  
    echo $emp[$row][$col]."  ";  
  }  
  echo "<br/>";  
}  
?> 
``` 
***
# 12) - PHP Loop -
when want the same block of code to run over and over again a certain number of times. So, instead of adding several almost equal code-lines in a script, we can use loops.
* types - while Loop, do while Loop, for Loop, foreach Loop)
