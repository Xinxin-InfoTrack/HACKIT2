using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Google.Apis.Requests;
using Google.Apis.Vision.v1.Data;

namespace LicenseVerification.Services
{
    public class GoogleVisiualAPI
    {
        private readonly string Endpoint = "https://vision.googleapis.com/v1/images:annotate";

        public string Execute(string base64ImageString)
        {
            var description = string.Empty;
            var request =  new Google.Apis.Vision.v1.Data.AnnotateImageRequest()
            {
                Image =  new Image()
                {
                    Content = base64ImageString
                }
            };

            return description;
        }


    }
}