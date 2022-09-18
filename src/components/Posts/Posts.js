import Post from './Post';
import { useState } from 'react';

export default function Posts() {
  const data = require('./PostsData.json');

  return (
    <div className='posts-container'>
      <ul>
        {
          data.map((item, index) => {
            return (
              <Post key={index} data={item}></Post>
            );
          })
        }
      </ul>
    </div>
  );
}