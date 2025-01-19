import { useState } from 'react'
import Dashboard from './components/admin-dashboard';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AdminDashboard from './components/admin-dashboard'
import CauseDetails from './components/cause-details'
import ContactUs from './components/contact-us'
import MainDashboard from './components/dashboard'
import DonationPage from './components/donation'
import ExploreCauses from './components/explore-causes'
import SignIn from './components/sign-in'
import UserProfile from './components/user-profile'
import SignUp from './components/sign-up'
import WalletConnection from './components/wallet-connection'
import Home from './components/home'
import Layout from './components/Layout';
import About from './components/about-us';
import AnimatedOutlet from './components/animatedOutlet';
import AdminMainDashboard from './components/admin-dashboard/components/AdminDashboard';
import NewWalletConnect from './components/admin-dashboard/components/Connector';
// import MoralisTransactions from './components/admin-dashboard/Transactions/app';
import ForgotPassword from './components/forgot-password';
function App() {


  return (
    <>
      <Router>
        <AnimatedOutlet />
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="donate" element={<DonationPage />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="sign-In" element={<SignIn />} />
            <Route path="sign-Up" element={<SignUp />} />

            <Route exact path="adminDash"  element={<AdminMainDashboard/>}>
              <Route exact path="causes" element={<CauseDetails/>}/>
              <Route exact path="" element={<Dashboard/>} />
              <Route exact path='connect' element={<NewWalletConnect/>}/>
              {/* <Route exact path="transactions" element={<MoralisTransactions/>}/> */}
            </Route>

            <Route path="contact" element={<ContactUs />} />
            <Route path="wallet-connection" element={<WalletConnection />} />
            <Route path="explore-causes" element={<ExploreCauses />} />
            <Route path="cause-details/:id" element={<CauseDetails />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="dashboard" element={<MainDashboard />} />
            <Route path="forgot-password" element={<ForgotPassword />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
