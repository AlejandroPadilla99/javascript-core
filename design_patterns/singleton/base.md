# Singleton Pattern Example

Problem: the singleton pattern solve two mains problems
## 1. Ensure that a class has just a single instance 

The general idea is think that you created an object and  after some time you decided to create a new one but both control access to some shared resource, for example a database.

In that case, why create a new fresh object instead of getting the want you created? 
## 2. Provide a global access poit to that instance

If it will have a global access, why not use global variables? maybe you think that is a good idea, but the answer is because there are unsafe since any part of you code can overwrite them.

