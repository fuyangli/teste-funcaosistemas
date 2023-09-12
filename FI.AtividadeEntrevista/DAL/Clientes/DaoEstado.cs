using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FI.AtividadeEntrevista.DML;

namespace FI.AtividadeEntrevista.DAL
{
    /// <summary>
    /// Classe de acesso a dados de Cliente
    /// </summary>
    internal class DaoEstado : AcessoDados
    {
        /// <summary>
        /// Lista todos os estados
        /// </summary>
        internal List<DML.Estado> Listar()
        {
            DataSet ds = base.Consultar("FI_SP_ConsEstados", new List<System.Data.SqlClient.SqlParameter>());
            List<DML.Estado> cli = Converter(ds);

            return cli;
        }


        /// <summary>
        /// Excluir Cliente
        /// </summary>
        /// <param name="cliente">Objeto de cliente</param>
        internal void Excluir(long Id)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("Id", Id));

            base.Executar("FI_SP_DelCliente", parametros);
        }

        private List<DML.Estado> Converter(DataSet ds)
        {
            List<DML.Estado> lista = new List<DML.Estado>();
            if (ds != null && ds.Tables != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    DML.Estado cli = new DML.Estado();
                    cli.Id = row.Field<int>("EstadoID");
                    cli.Nome = row.Field<string>("Nome");
                    cli.Sigla = row.Field<string>("Sigla");
                    lista.Add(cli);
                }
            }

            return lista;
        }
    }
}
