
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlayCircle, StopCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [topTrader, setTopTrader] = useState("");
  const [slippage, setSlippage] = useState("");
  const { toast } = useToast();

  const handleStart = () => {
    if (!topTrader || !slippage) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before starting.",
        variant: "destructive",
      });
      return;
    }
    setIsRunning(true);
    toast({
      title: "Bot Started",
      description: "The trading bot is now running.",
    });
  };

  const handleStop = () => {
    setIsRunning(false);
    toast({
      title: "Bot Stopped",
      description: "The trading bot has been stopped.",
    });
  };

  return (
    <div className="min-h-screen pt-16 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text title-animation mb-4">
            Polymarket Copy Trading Bot
          </h1>
          <p className="text-muted-foreground">
            Automatically copy trades from top performers
          </p>
        </div>

        <div className="glass p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Top Trader</label>
              <Input
                placeholder="Enter trader address"
                value={topTrader}
                onChange={(e) => setTopTrader(e.target.value)}
                className="bg-background/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Acceptable Slippage (%)
              </label>
              <Input
                type="number"
                placeholder="Enter slippage percentage"
                value={slippage}
                onChange={(e) => setSlippage(e.target.value)}
                className="bg-background/50"
              />
            </div>

            <Button
              onClick={isRunning ? handleStop : handleStart}
              className={`w-full ${
                isRunning
                  ? "bg-destructive hover:bg-destructive/90"
                  : "bg-primary hover:bg-primary/90"
              }`}
            >
              {isRunning ? (
                <StopCircle className="mr-2 h-4 w-4" />
              ) : (
                <PlayCircle className="mr-2 h-4 w-4" />
              )}
              {isRunning ? "Stop Bot" : "Start Bot"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6">
            <h3 className="text-lg font-medium mb-4">Top Trader's Profit</h3>
            <p className="text-3xl font-bold text-primary">+245.5%</p>
            <p className="text-sm text-muted-foreground mt-2">Last 30 days</p>
          </div>

          <div className="glass p-6">
            <h3 className="text-lg font-medium mb-4">My Profit</h3>
            <p className="text-3xl font-bold text-primary">+178.3%</p>
            <p className="text-sm text-muted-foreground mt-2">Last 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
