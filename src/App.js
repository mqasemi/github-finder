
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubCOntext'
import { AlertProvider } from './context/alert/AlertContex';
import User from './pages/User';
function App() {
  return (
    <GithubProvider>
      <AlertProvider>

    

<Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar/>

            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/user/:login' element={<User/>}/>
                <Route path='/notfund' element={<NotFound/>}/>
                <Route path='/*' element={<NotFound/>}/>
              </Routes>
 
            </main>

            <Footer/>
          </div>


    </Router>
    </AlertProvider>
    </GithubProvider>
    
   
  );
}

export default App;
