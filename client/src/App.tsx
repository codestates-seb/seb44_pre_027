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
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import QuestionEditPage from './pages/question/[id]/questionedit/QuestionEditPage';
import AnswerEditPage from './pages/question/[id]/answeredit/[answerid]/AnswerEditPage';

const queryClient = new QueryClient();

interface AppProps {}

const App = ({}: AppProps) => {
  console.log('11:49')
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header changeNav={true} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<QuestionsPage />} />
              <Route path="/questions/ask" element={<AskQuestionPage />} />
              <Route path="/questions/:questionid" element={<QuestionDetailPage />} />
              <Route path="/questions/:questionid/questionedit" element={<QuestionEditPage />} />
              <Route
                path="/questions/:questionid/answeredit/:answerid"
                element={<AnswerEditPage />}
              />
              <Route path="/users/:memberId" element={<UserPage />} />
              <Route path="/users/login" element={<LoginPage />} />
              <Route path="/users/signup" element={<SignupPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
