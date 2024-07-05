namespace Backend.DB
{
    public class DatabaseSettings
    {
        public string CollectionName { get; set; } = null!;
        public string BooksCollectionName { get; set; } = null!;
       
        public string ConnectionString { get; set; } = null!;
       
        public string DatabaseName { get; set; } = null!;

        public string JwtKey { get; set; } = null!;
    }
}