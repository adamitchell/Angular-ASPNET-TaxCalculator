using System;
using Angular_ASPNETCore_Seed.Models;

namespace Angular_ASPNETCore_Seed.Repositories
{
    public class TaxCalculatorRepository
    {
        ZipCodes zips = new ZipCodes();
        FormulaOptions formulaOptions = new FormulaOptions();
        int FlatRate = 6000; //6k USD

        public TaxCalculatorRepository()
        {
        }

        //Zips were gathered According to https://www.unitedstateszipcodes.org/ny/ using a 
        //javascript scraper function that i pasted in the ZipCodes.cs file for you

        public TaxCalcResultErrorsAllowed GetCalculatedTax(int income, int zipCode)
        {
          TaxCalcResultErrorsAllowed result = new TaxCalcResultErrorsAllowed();
          try
          {
            string formula = "";
            double value = 0.0d;
            int progressiveStatus = ProgressiveAndFlatZipCode(zipCode);

            //if progresssiveStatus > 0, the zipCode is in either New York, California, or Virginia
            if(progressiveStatus > 0)
            {
              //if income > 40000, we do progressive tax
              if(income > 40000)
              {
                formula = formulaOptions.ProgressiveTax;
                value = ProgressiveTaxCalculator(income);
              }else{
                //if income <= 40000, we do flat tax
                formula = formulaOptions.FlatTax;
                value = FlatRate;
              }

            }else{
              formula = formulaOptions.FixedValue;
              value = FlatRate;
            }
            result.Formula = formula;
            result.Value = value;
          }catch(Exception e){
            result.Error = e.Message;
          }
          return result;
        }

        private int ProgressiveAndFlatZipCode(int zipCode)
        {
          //going through new york zips
          foreach(var zip in zips.NewYork)
          {
            if(zip == zipCode)
            {
              return 1;
            }
          }

          //going through california zips
          foreach(var zip in zips.California)
          {
            if(zip == zipCode)
            {
              return 2;
            }
          }

          //going through virginia zips
          foreach(var zip in zips.Virginia)
          {
            if(zip == zipCode)
            {
              return 3;
            }
          }
          return 0;
        }

        private double ProgressiveTaxCalculator(int income)
        {
          double tax = 0;

          if(income <= 40000)
          {
            tax = FlatRate;
          }else if(income >= 40001 && income <= 86375){
            tax = income * 0.12;
          }else if(income >= 86376 && income <= 164925){
            tax = income * 0.22;
          }else if(income >= 164926 && income <= 209425){
            tax = income * 0.24;
          }else if(income >= 209426 && income <= 523600){
            tax = income * 0.35;
          }else{
            tax = income * 0.37;
          }

          return tax;
        }
    }
}
