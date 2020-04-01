using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDatabase.Models
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
    }
}
