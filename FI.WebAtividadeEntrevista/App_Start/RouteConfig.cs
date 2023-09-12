using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WebAtividadeEntrevista
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Estados",
                url: "Estados",
                defaults: new { controller = "Estados", action = "Get" }
            );

            routes.MapRoute(
                name: "BeneficiariosList",
                url: "Cliente/BeneficiariosList/{id}",
                defaults: new { controller = "Cliente", action = "BeneficiariosList", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Cliente", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
