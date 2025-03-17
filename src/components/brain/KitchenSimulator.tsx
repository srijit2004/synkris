
import React, { useState } from 'react';
import { Calculator, ChevronRight, DollarSign, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface SimulationResult {
  monthlyRevenue: number;
  monthlyCost: number;
  monthlyProfit: number;
  breakEvenDays: number;
  profitMargin: number;
}

const KitchenSimulator = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [menuItems, setMenuItems] = useState(8);
  const [dailyOrders, setDailyOrders] = useState(75);
  const [avgOrderValue, setAvgOrderValue] = useState(250);
  const [rentCost, setRentCost] = useState(25000);
  const [staffCount, setStaffCount] = useState(4);
  const [initialInvestment, setInitialInvestment] = useState(400000);
  const [result, setResult] = useState<SimulationResult | null>(null);
  
  const calculateSimulation = () => {
    // Simple simulation logic
    const monthlyRevenue = dailyOrders * avgOrderValue * 30;
    const staffCost = staffCount * 15000;
    const ingredientCost = monthlyRevenue * 0.35; // 35% of revenue
    const utilitiesCost = 12000;
    const monthlyCost = rentCost + staffCost + ingredientCost + utilitiesCost;
    const monthlyProfit = monthlyRevenue - monthlyCost;
    const profitMargin = (monthlyProfit / monthlyRevenue) * 100;
    const breakEvenDays = initialInvestment / (monthlyProfit > 0 ? monthlyProfit / 30 : 1);
    
    setResult({
      monthlyRevenue,
      monthlyCost,
      monthlyProfit,
      breakEvenDays,
      profitMargin
    });
    
    setStep(3);
    
    toast({
      title: "Simulation Complete",
      description: "Check your profitability analysis results below",
    });
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-synkris-green mr-2" />
        <h3 className="font-semibold">Kitchen Profitability Simulator</h3>
      </div>
      
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-4">Menu & Orders</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Number of Menu Items</label>
                <div className="flex items-center gap-4">
                  <Slider 
                    value={[menuItems]} 
                    min={2} 
                    max={20} 
                    step={1}
                    onValueChange={(value) => setMenuItems(value[0])}
                    className="flex-1"
                  />
                  <span className="w-10 text-center">{menuItems}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Daily Orders</label>
                <div className="flex items-center gap-4">
                  <Slider 
                    value={[dailyOrders]} 
                    min={10} 
                    max={300} 
                    step={5}
                    onValueChange={(value) => setDailyOrders(value[0])}
                    className="flex-1"
                  />
                  <span className="w-10 text-center">{dailyOrders}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Average Order Value (₹)</label>
                <div className="flex items-center gap-4">
                  <Slider 
                    value={[avgOrderValue]} 
                    min={100} 
                    max={1000} 
                    step={10}
                    onValueChange={(value) => setAvgOrderValue(value[0])}
                    className="flex-1"
                  />
                  <span className="w-16 text-center">₹{avgOrderValue}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button 
              className="flex items-center gap-1"
              onClick={() => setStep(2)}
            >
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-4">Costs & Investment</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Monthly Rent (₹)</label>
                  <Input
                    type="number"
                    value={rentCost}
                    onChange={(e) => setRentCost(parseInt(e.target.value) || 0)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Staff Count</label>
                  <Input
                    type="number"
                    value={staffCount}
                    onChange={(e) => setStaffCount(parseInt(e.target.value) || 0)}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Initial Investment (₹)</label>
                <Input
                  type="number"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(parseInt(e.target.value) || 0)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            
            <Button 
              className="flex items-center gap-1"
              onClick={calculateSimulation}
            >
              Calculate <Calculator className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {step === 3 && result && (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-4">Profitability Analysis</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Monthly Revenue</div>
                <div className="text-xl font-bold flex items-center gap-1 text-green-500">
                  <DollarSign className="h-4 w-4" /> ₹{result.monthlyRevenue.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Monthly Expenses</div>
                <div className="text-xl font-bold flex items-center gap-1 text-red-500">
                  <DollarSign className="h-4 w-4" /> ₹{result.monthlyCost.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Monthly Profit</div>
                <div className={`text-xl font-bold flex items-center gap-1 ${result.monthlyProfit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  <DollarSign className="h-4 w-4" /> ₹{result.monthlyProfit.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Profit Margin</div>
                <div className={`text-xl font-bold ${result.profitMargin >= 20 ? 'text-green-500' : result.profitMargin >= 0 ? 'text-yellow-500' : 'text-red-500'}`}>
                  {result.profitMargin.toFixed(1)}%
                </div>
              </div>
            </div>
            
            <div className="bg-synkris-green/10 border border-synkris-green/20 p-4 rounded-lg mb-6">
              <h5 className="font-medium mb-2 text-synkris-green">AI Analysis</h5>
              <p className="text-sm">
                {result.profitMargin >= 25 
                  ? "Your cloud kitchen shows excellent profitability potential! Consider expanding your menu and marketing to increase order volume further."
                  : result.profitMargin >= 15
                  ? "Your kitchen has good profitability. Focus on optimizing costs and increasing your average order value to improve margins."
                  : result.profitMargin >= 0
                  ? "Your kitchen is profitable but has thin margins. Consider reducing costs or increasing prices to improve sustainability."
                  : "This model is currently not profitable. Try adjusting your costs, pricing, or order volume to achieve profitability."}
              </p>
              <div className="mt-3 text-sm">
                <span className="font-medium">Break-even in: </span>
                <span className={result.breakEvenDays <= 180 ? 'text-green-500' : result.breakEvenDays <= 365 ? 'text-yellow-500' : 'text-red-500'}>
                  {result.breakEvenDays.toFixed(0)} days
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => setStep(2)}
            >
              Back
            </Button>
            
            <Button 
              className="flex items-center gap-1"
              onClick={() => {
                toast({
                  title: "Contact Sales",
                  description: "Our team will help you optimize your cloud kitchen model",
                });
              }}
            >
              Talk to Synkris Expert <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KitchenSimulator;
