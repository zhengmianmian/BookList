# Booklist
A simple booklist app that enables you to manage your books and view your friends' favourite books.

### Practice
 - CRUD operations
 - Connect to mongoDB
 - JWT auth and bearer tokens
 - Cross origin issue
 - Read .env variables


## Run the App
Open two terminals, one for backend, the other one for frontend. cd the folder.

**In the Backend folder:**

Create a .env file that looks like
```
SIMPLEAUTHDATABASE__CONNECTIONSTRING=[DATABASE_URL]
SIMPLEAUTHDATABASE__DATABASENAME=[YOUR_DATABASE_NAME]
SIMPLEAUTHDATABASE__USERSCOLLECTION=Users
SIMPLEAUTHDATABASE__BOOKSCOLLECTION=Books
SIMPLEAUTHDATABASE__JWTKEY=[YOUR_JWT_KEY]
```
JWT_KEY should be long enough.

To run it:
```
dotnet run
```
Enable hot reload:
```
dotnet watch run
```
**In the frontend folder**

Create a .env file 
```
REACT_APP_BASE_URL=http://localhost:8080
```
Store the backend URL. You can use any port for backend.

Install the dependencies first
```
npm i
```
Then start it
```
npm start
```

## Key Features
### Login and Signup

![login](https://github.com/zhengmianmian/SimpleAuth/assets/61965934/9bc579c9-49ad-4a60-8d99-b07ff2bc9318)

### View & Delete your own books
 - You can click the heart of a book item to like it. 
 - Click again to dislike it. 
 - Click DELETE to delete a book.
![books](https://github.com/zhengmianmian/SimpleAuth/assets/61965934/7c3fc14d-6ef6-4e4d-9a7f-f086936db7a9)

### Add a new book
![addBook](https://github.com/zhengmianmian/SimpleAuth/assets/61965934/df579d1a-d30d-4ffa-8142-ef83dadebb6f)

### View what books others like
Click a user to view books she/he likes
![other](https://github.com/zhengmianmian/SimpleAuth/assets/61965934/cc1df714-2e42-4d40-9ac3-d7d54d495ff5)
