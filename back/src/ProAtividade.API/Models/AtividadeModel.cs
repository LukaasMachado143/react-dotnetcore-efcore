using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models
{
    public class AtividadeModel
    {
        public int Id { get; set; }
        public string? Titulo { get; set; }
        public string? Descricao { get; set; }
        public PrioridadeEnum? Prioridade { get; set; }

        public AtividadeModel(int id)
        {
            Id = id;
        }
    }
}