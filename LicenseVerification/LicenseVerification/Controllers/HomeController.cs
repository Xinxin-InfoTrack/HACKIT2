using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;
using LicenseVerification.Models;
using LicenseVerification.Services;

namespace LicenseVerification.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }



        public JsonResult AnalyseImage1(IndividualData data)
        {
            var valid = true; 

            //todo: need tina to add the google api account information to verify the name

            //1: call google api to get the text descirption
            var description = new GoogleVisiualAPI().Execute(data.Image);

            //2: verfify if name match and return the information 
            var firstNameWithNoSpace = data.FirstName.Replace(" ", "");
            if (!description.Contains(firstNameWithNoSpace) || !description.Contains(data.LastName))
            {
                valid = false;
            }

            var licenseNoWithNoSpace = data.License.Replace(" ", "");
            if (!description.Contains(licenseNoWithNoSpace))
            {
                valid = false;
            }

            if (valid)
            {
                return Json(new MatchModel { NameMatch = true, BirthdayMatch = false, LicenseMatch = true });
            }

            return Json(new MatchModel { NameMatch = true, BirthdayMatch = false, LicenseMatch = false });
        }


        public JsonResult BetterAnalyseImage1(IndividualData data)
        {
            var valid = true;

            //todo: need tina to add the google api account information to verify the name

            //1: call google api to get the text descirption
            var description = new GoogleVisiualAPI().Execute(data.Image);

            //2: verfify if name match and return the information 
            var firstNameWithNoSpace = data.FirstName.Replace(" ", "");
            if (!description.Contains(firstNameWithNoSpace) || !description.Contains(data.LastName))
            {
                valid = false;
            }

            var licenseNoWithNoSpace = data.License.Replace(" ", "");
            if (!description.Contains(licenseNoWithNoSpace))
            {
                valid = false;
            }

            if (valid)
            {
                return Json(new MatchModel { NameMatch = true, BirthdayMatch = false, LicenseMatch = true });
            }

            return Json(new MatchModel { NameMatch = true, BirthdayMatch = false, LicenseMatch = false });
        }


        public JsonResult AnalyseImage2(IndividualData data)
        {
            var valid = true;
            

            //todo: need tina to add the google api account information to verify the name

            //1: call google api to get the text descirption
            var description = new GoogleVisiualAPI().Execute(data.Image);

            //2: verfify if name match and return the information 
            var firstNameWithNoSpace = data.FirstName.Replace(" ", "");
            if (!description.Contains(firstNameWithNoSpace) || !description.Contains(data.LastName))
            {
                valid = false;
            }

            var licenseNoWithNoSpace = data.License.Replace(" ", "");
            if (!description.Contains(licenseNoWithNoSpace))
            {
                valid = false;
            }

            if (valid)
            {
                return Json(new MatchModel { NameMatch = true, BirthdayMatch = false, LicenseMatch = true });
            }

            return Json(new MatchModel { NameMatch = true, BirthdayMatch = false, LicenseMatch = false });
        }

        public JsonResult BetterAnalyseImage2(IndividualData data)
        {
            var valid = true;


            //todo: need tina to add the google api account information to verify the name

            //1: call google api to get the text descirption
            var description = new GoogleVisiualAPI().Execute(data.Image);

            //2: verfify if name match and return the information 
            var firstNameWithNoSpace = data.FirstName.Replace(" ", "");
            if (!description.Contains(firstNameWithNoSpace) || !description.Contains(data.LastName))
            {
                valid = false;
            }

            var licenseNoWithNoSpace = data.License.Replace(" ", "");
            if (!description.Contains(licenseNoWithNoSpace))
            {
                valid = false;
            }

            if (valid)
            {
                return Json(new MatchModel { NameMatch = true, BirthdayMatch = false, LicenseMatch = true });
            }

            return Json(new MatchModel { NameMatch = true, BirthdayMatch = false, LicenseMatch = false });
        }
    }
}