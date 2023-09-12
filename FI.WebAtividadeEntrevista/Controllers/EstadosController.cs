using FI.AtividadeEntrevista.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAtividadeEntrevista.Controllers
{
    public class EstadosController : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {
            try
            {
                var listEstados = new BoEstado().Listar();
                return Json(new { Result = "OK", Records = listEstados}, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
