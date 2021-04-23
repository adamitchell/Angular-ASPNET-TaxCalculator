using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular_ASPNETCore_Seed.Models;
using Angular_ASPNETCore_Seed.Repositories;

namespace Angular_ASPNETCore_Seed.Apis
{
    [Route("api/[controller]")]
    public class TaxCalculatorController : Controller
    {
        TaxCalculatorRepository taxCalculatorRepository;
        public TaxCalculatorController()
        {
            taxCalculatorRepository = new TaxCalculatorRepository();
        }
        
        //Paramters:
        //income => anual income in USD - ex: 110000
        //zipCode -> ex: 77386
        //
        //Returns:
        //TaxCalcResult object with filled out data, or EmptyResult()
        [HttpGet("[action]/{income}/{zipCode}")]
        public IActionResult GetCalculatedTax(int income, int zipCode)
        {
            TaxCalcResultErrorsAllowed result = null;
            
            result = taxCalculatorRepository.GetCalculatedTax(income, zipCode);

            if(result == null)
            {
                return new EmptyResult();
            }

            return new JsonResult(result);
        }
    }
}