# Team Appointments-Test
Team Appointments-Test - Full Stack Web App (MySQL, Node.js and React)

# Dependencies:
react: ^18.2.0

MySQL with phpMyAdmin

## Import the Database:
1. Open phpMyAdmin - I used XAMPP to run a MariaDB MySQL Server.
2. Import teamappointments.sql to a new database named Vacations.
3. Make sure the following MySQL connection settings are correct inside the file config-dev.json located in the Backend:
    - Database Host: localhost
    - Database Name: teamAppointments
    - Database User: root
    - Database Default Password: (empty)

## Download and Install:
1. Download my project and cd into it using the following commands:
```
git clone https://github.com/RACHELr1998/TeamAppointments-Test3
cd Team-Appointments
```
2. Install required node modules for the Backend and the Frontend using the following commands:
```
cd Frontend
npm i
cd ../Backend
npm i
```

## Run Instructions:
1. Make sure the MySQL server is up and running – For XAMPP you also need to make sure that Apache and MySQL are running to be able to access phpMyAdmin.
2. First, Run the Backend: (Make sure you’re on the Team-Appointments folder)
```
cd Backend
npm start
```
3. Next, Run the Frontend:
```
cd ../Frontend
npm start
```

This should open up on http://localhost:3000/ and load up!