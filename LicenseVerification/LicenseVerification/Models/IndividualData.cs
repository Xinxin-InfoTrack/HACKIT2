using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace LicenseVerification.Models
{
    public class IndividualData
    {
        public string Name { get; set; }
        public string Birthday { get; set; }
        public HttpPostedFileBase Image { get; set; }
    }
}