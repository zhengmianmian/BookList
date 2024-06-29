using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Backend.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id {get;set;}
        [BsonElement("Email")]
        public string Email {get;set;} = null!;
        [BsonElement("Password")]
        public string Password {get;set;}= null!;
    }
}