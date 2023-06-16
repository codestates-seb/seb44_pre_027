import React, { useState } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import QuestionContainer from './components/home/QuestionContainer';
import LeftSideBar from './components/LeftSideBar';
import UseDahamComponent from './components/UseDahamComponent';
import QuestionsPage from './pages/question/QuestionsPage';
import QuestionDetailPage from './pages/question/[id]/QuestionDetailPage';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <>
      <Header />
      <QuestionsPage />
      <Footer />
    </>
  );
};

export default App;