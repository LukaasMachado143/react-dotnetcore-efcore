using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<AtividadeModel> Atividades = new List<AtividadeModel>()
            {
                new AtividadeModel(1),
                new AtividadeModel(2),
                new AtividadeModel(3)
            };
        
        [HttpGet]
        public IEnumerable<AtividadeModel> Get(){
            return Atividades;
        }

        [HttpGet("{id}")]
        public AtividadeModel? Get(int id) => Atividades.FirstOrDefault(ati => ati.Id == id);

        [HttpPost]
        public IEnumerable<AtividadeModel> Post(AtividadeModel atividade){
            return Atividades.Append<AtividadeModel>(atividade);
        }

        [HttpPut("{id}")]
        public string Put(int id){
            return $"My First Method Put with id: {id}.";
        }

        [HttpDelete("{id}")]
        public string Delete(int id){
            return $"My First Method Delete with id: {id}.";
        }
    }
}