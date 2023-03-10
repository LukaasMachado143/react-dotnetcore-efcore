using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models
{
    public class AtividadeModel
    {
        public int id { get; set; }
        public string? titulo { get; set; }
        public string? descricao { get; set; }
        public string? prioridade { get; set; }
        

        // public AtividadeModel(Parameters)
        // {
            
        // }

        public AtividadeModel(int auxID)
        {
            id = auxID;
        }
    }
}