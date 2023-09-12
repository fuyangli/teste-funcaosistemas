using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.BLL
{
    public class BoEstado
    {
            /// <summary>
        /// Lista os clientes
        /// </summary>
        public List<DML.Estado> Listar()
        {
            DAL.DaoEstado cli = new DAL.DaoEstado();
            return cli.Listar();
        }
    }
}
