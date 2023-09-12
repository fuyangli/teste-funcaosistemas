using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.DML
{
    /// <summary>
    /// Representa um estado brasileiro.
    /// </summary>
    public class Estado
    {
        /// <summary>
        /// Identificador único do estado.
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// Nome completo do estado.
        /// </summary>
        public string Nome { get; set; }

        /// <summary>
        /// Sigla do estado.
        /// </summary>
        public string Sigla { get; set; }
    }
}
