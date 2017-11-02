using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LicenseVerification.Models
{
    public class MatchModel
    {
        public bool? NameMatch { get; set; }
        public bool? BirthdayMatch { get; set; }
        public bool? FaceMatch { get; set; }

    }
}