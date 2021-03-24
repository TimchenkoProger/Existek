using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Existek.Junior.Task.Models;

namespace Existek.Junior.Task.Models
{
    public class ApplicationContext:DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options):base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Existek.Junior.Task.Models.Worker> Worker { get; set; }
    }
}
