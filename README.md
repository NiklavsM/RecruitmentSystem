# Requisites

To run the application locally Node package manager, Maven and Java SDK need to be installed on the machine.

#Client

Firstly, to make sure that all the external dependencies are installed “npm install” needs to be executed from recruitment-system-app/client directory. This will download all the dependencies and put them in node_modules folder.
To run the frontend application “nmp start” command needs to be executed form recruitment-system-app/client directory. This starts a server on localhost port 4200.

#Server

To start the backend server “mvn spring-boot:run -Dspring.profiles.active=dev” needs to be executed from recruitment-system-app/server directory. This starts the backend server on port 8080.
