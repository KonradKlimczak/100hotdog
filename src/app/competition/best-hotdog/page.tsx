'use client';
import React from 'react';

import PostForm from './PostForm';
import PostList from './PostList';

const App: React.FC = () => {
  return (
    <div>
      <h1>My Posts</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default App;
