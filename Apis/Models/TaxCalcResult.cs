namespace Angular_ASPNETCore_Seed.Models
{
    public class TaxCalcResult
    {
        public TaxCalcResult()
        {

        }

        public string Formula { get; set; }
        public double Value { get; set; }
    }

    public class TaxCalcResultErrorsAllowed : TaxCalcResult
    {
        public string Error = null;
    }
}