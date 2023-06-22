import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import QuestionsPage from './pages/question/QuestionsPage';
import QuestionDetailPage from './pages/question/[id]/QuestionDetailPage';
import AskQuestionPage from './pages/question/ask/AskQuestionPage';
import UserPage from './pages/userInfo/UserPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
        <Header changeNav={true}/>
        <main className="flex-grow">
            <Routes>
              <Route path="/" element={<QuestionsPage/>}/>
              <Route path="/questions/ask" element={<AskQuestionPage/>}/>
              <Route path="/questions" element={<QuestionDetailPage/>}/>
              <Route path="/users/:id" element={<UserPage/>}/>
              <Route path="/users/login" element={<LoginPage/>}/>
              <Route path="/users/signup" element={<SignupPage/>}/>
            </Routes>
          </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;