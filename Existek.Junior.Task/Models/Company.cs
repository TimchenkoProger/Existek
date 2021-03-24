using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Existek.Junior.Task.Models
{
    public class Company
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Worker> Workers { get; set; } = new List<Worker>();
    }
}
