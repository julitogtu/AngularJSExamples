using System.Data.Entity;

namespace AngularjsResource.Models
{
    public class DemoContext : DbContext
    {    
        public DemoContext() : base("name=DemoContext")
        {
        }

        public DbSet<Customer> Customers { get; set; }
    }
}
