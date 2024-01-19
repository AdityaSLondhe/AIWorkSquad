import { Route, Routes } from 'react-router-dom'
import './globals.css'
import LoginForm from './_auth/forms/LoginForm'
import Home from './_root/pages/Home'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout/>}>
          <Route index element={<LoginForm/>}/>
        </Route>

        {/* private routes */}
        <Route element={<RootLayout/>}>
          <Route path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
