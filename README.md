# GUCCompiler

GUC-Compiler is an app that detects the language of a code you give it & compiles it, and this is the deployment link https://guc-compiler.herokuapp.com/ . It is written in Nodejs, so we used npm as our dependency isolation tool.

## Declarations:

You will need a cmd prompt like git bash and to install node.js to use npm, and then:

* You need to install the dependencies using the command “npm install”.
* When you need to start the app use the command “npm start”
* Now the app is running on http://localhost:8080/

## Configuration:

We used 3 environment variables:
* JdoodleClientId & JdoodleClientSecret for the language compiler 
https://www.jdoodle.com/compiler-api/docs

* Algorithmia API key for the language detector. https://algorithmia.com/algorithms/PetiteProgrammer/ProgrammingLanguageIdentification

## Build, Run & Release:

* Initially For building the code we used npm, the steps are written above.
* We then need to put the code in a container using docker, so we use the command “docker run”
* And finally for the release, we use the command “docker compose-up”
