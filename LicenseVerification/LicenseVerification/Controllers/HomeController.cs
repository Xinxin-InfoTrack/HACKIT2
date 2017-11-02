using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LicenseVerification.Models;

namespace LicenseVerification.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Analyse(IndividualData data)
        {
            var result = new MatchModel {NameMatch = true, BirthdayMatch = true};
            return Json(result);
        }

      
    }
}