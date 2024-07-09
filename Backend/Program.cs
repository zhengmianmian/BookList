using System;
using System.Text;
using Backend.DB;
using Backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using DotNetEnv;

var builder = WebApplication.CreateBuilder(args);

// Load the .env file
Env.Load();

// Add services to the container.
// builder.Services.Configure<DatabaseSettings>(
//     builder.Configuration.GetSection("SimpleAuthDatabase"));

// Read environment variables
var dbConnectionString = Environment.GetEnvironmentVariable("SIMPLEAUTHDATABASE__CONNECTIONSTRING");
Console.WriteLine("connection string: "+ dbConnectionString);
var dbName = Environment.GetEnvironmentVariable("SIMPLEAUTHDATABASE__DATABASENAME");
var dbUsersCollection = Environment.GetEnvironmentVariable("SIMPLEAUTHDATABASE__USERSCOLLECTION");
var dbBooksCollection = Environment.GetEnvironmentVariable("SIMPLEAUTHDATABASE__BOOKSCOLLECTION");
var jwtKey = Environment.GetEnvironmentVariable("SIMPLEAUTHDATABASE__JWTKEY");
// Use the configuration in the application
builder.Services.Configure<DatabaseSettings>(options =>
{
    options.ConnectionString = dbConnectionString;
    options.DatabaseName = dbName;
    options.CollectionName = dbUsersCollection;
    options.BooksCollectionName = dbBooksCollection;
    options.JwtKey = jwtKey;
});

builder.Services.AddSingleton<UsersService>();
builder.Services.AddSingleton<BooksService>();

builder.Services.AddControllers();

// Configure jwt auth
builder.Services.AddAuthentication(x => 
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters{
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});


// Configure CORS to allow requests from the React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder => builder
            .WithOrigins("http://localhost:3000") // React frontend URL
            .AllowAnyMethod()
            .AllowAnyHeader());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
// Enable CORS
app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();

