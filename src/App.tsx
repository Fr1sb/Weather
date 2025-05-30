import "./App.css"
import { BrowserRouter, Routes ,Route} from "react-router-dom"
import { Layout } from "./components/Layout"
import { ThemeProvider } from './components/theme-provider';
import { WeatherDashboard } from "./pages/weather-dashboard";
import { City } from "./pages/city";
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter> 
        <ThemeProvider defaultTheme="dark">
         <Layout>
           <Routes>
             <Route path='/' element={ <WeatherDashboard/>  }/>
              <Route path='/city/:cityName' element={ <City/>  }/>
            </Routes>
         </Layout>
        </ThemeProvider>
     </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
 
export default App