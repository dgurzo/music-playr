import React from 'react';
import Content from './Content';
import { Navigationbar } from './Navbar';
import { Sidebar } from './Sidebar';

function App() {
  return (
    <div>
        <Navigationbar />
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;
