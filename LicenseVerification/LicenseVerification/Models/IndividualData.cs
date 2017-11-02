using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace LicenseVerification.Models
{
    public class IndividualData
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Birthday { get; set; }
        public string License { get; set; }
        public string Image { get; set; }
    }
}