# Lego Web App
A web application for the Lego predicate logic language  
https://lego-web-app.herokuapp.com/   
:dragon::dragon::dragon::dragon::dragon::dragon::dragon::dragon:

### Run Instructions 
Install Node.Js, Typescript  
`git clone $this_repo`  
`npm run dev`  
:computer::computer::computer::computer::computer::fire::fire::fire::fire::fire:

---

### Lego Language Definition 

#### Grammar

````
[formula] ::= [exp] [rel_op] [exp] |    
              [unary_conn] [formula] |    
              [formula] [binary_conn] [formula] |  
              [quantifier] [var] : [domain] . [formula] |   
              ([formula])  

[exp] ::= [int] |    
          [var] |      
          [exp] [bin_op] [exp] |     
          ([exp]) 
          
[rel_op] :: > | >= | =  

[unary_conn] ::= !   

[binary_conn] ::= && | || | -> | <->

[quantifier] ::= forall | exists

[var] ::= identifiers

[domain] ::= [[int] .. [int]]

[int] ::= integers

[bin_op] ::= +|-|*|/|mod
````

#### Examples of syntactically correct formulas 

````
forall x : [0..10] . exists y : [0..10] . exists z : [-10..10] . x > y && x > z && x = y+z 
forall x : [0..5] . forall y : [3..20] . (2 >= y) -> (x/y > x)
````
