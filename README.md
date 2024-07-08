# Booklist
A simple booklist app that enables you to manage your books and view your friends' favourite books.
## Backend Dotnet 8.0 
Request examples:
 - A user signs in, get the token.
 ```
POST http://localhost:8080/api/Users/authenticate 
{
    "id": "667f94a94c4b762efbd0b92b",
    "email": "dog",
    "password": "12dd56"
}
```
 - GET Users
```
http://localhost:8080/api/Users
```
 - Add a user
```
POST http://localhost:8080/api/Users
{
    "Email": "dog",
    "Password":"12dd56"
}
```
 - Update a user
```
PUT http://localhost:8080/api/Users/{id}
```
 - DELETE a user
```
DELETE http://localhost:8080/api/Users/{id}
```
## React Frontend
A single booklist app.

## Key points
### Sovle cross origin issue
In the Program.cs, configure CORS to allow requests from the React frontend.
```
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder => builder
            .WithOrigins("http://localhost:3000") // React frontend URL
            .AllowAnyMethod()
            .AllowAnyHeader());
});
```
Enable CORS
```
app.UseCors("AllowReactApp");
```