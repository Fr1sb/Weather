import { Button } from "@/components/ui/button"
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react"
import { useGeolocation } from "@/hooks/use-location";
import { WeatherSkeleton } from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export const WeatherDashboard = () => {
 
  const {coordinates,error:locationError,getLocation,isLoading:locationLoading}=  useGeolocation();
 
  console.log("Coordinates", coordinates);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      console.log("Refreshed Coordinates:", coordinates);
    }
  }

  if(locationLoading) {
    return <WeatherSkeleton />
  }
  if(locationError) {
    return <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4"/>
              <AlertTitle>Location Error</AlertTitle>
              <AlertDescription className="flex flex-col gap-4">{locationError}</AlertDescription>
              <Button onClick={getLocation} variant={"outline"} className="w-fit">\
                <MapPin className="mr-2 h-4 w-4" />Retry</Button>
            </Alert>
}





  return <div className="space-y-4 p-4">
    {/* Favorite Cities */}
    <div className="flex items-center justify-between">
      <h1 className="w-full text-xl fon-bold tracking-tight"> My location</h1>
      <Button variant={"outline"} size={"icon"} onClick={handleRefresh}
      // disabled={} 
      >
        
        <RefreshCw className="h-4 w-4"/>
      </Button>
    </div>

    {/* Current and Early Forecast */}

  </div>
}