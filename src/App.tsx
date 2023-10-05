import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { ConfigProvider } from 'antd';
import Router from './routes';
import store from '@/stores';
import { Provider } from 'react-redux';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            colorPrimary: '#00b96b',
            borderRadius: 5,

            // 派生变量，影响范围小
            colorBgContainer: '#f6ffed',
          },
        }}
      >
        <Provider store={store}>
          <Router></Router>
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </>
);

export default App;
