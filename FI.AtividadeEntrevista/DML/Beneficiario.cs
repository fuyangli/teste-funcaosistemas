﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.DML
{
    /// <summary>
    /// Classe de cliente que representa o registo na tabela Cliente do Banco de Dados
    /// </summary>
    public class Beneficiario
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }

        public long ClientId { get; set; }

    }
}
