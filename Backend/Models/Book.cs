using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Backend.Models;

public class Book
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")] /* Name is the attribute in mongodb */
    public string BookName { get; set; } = null!;

    public decimal Price { get; set; }

    public string Category { get; set; } = null!;

    public string Author { get; set; } = null!;
    public bool Like { get; set; } = false;
    
    [BsonRepresentation(BsonType.ObjectId)]
    public string Owner { get; set; } = null!;
}