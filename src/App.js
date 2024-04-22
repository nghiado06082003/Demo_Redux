import { Route, Routes } from 'react-router-dom';
import { FinLogsList } from './features/finlogs/finlogsList';
import { FinLogAdd } from './features/finlogs/finlogAdd';
import { PostsList } from './features/posts/postsList';
import { PostAdd } from './features/posts/postAdd';
import { PostsRTKList } from './features/postsRTK/postsRTKList';
import { PostRTKAdd } from './features/postsRTK/postRTKAdd';
import { PostRTKSingle } from './features/postsRTK/postRTKSingle';
import { PostRTKUpdate } from './features/postsRTK/postRTKUpdate';
import { PostSingle } from './features/posts/postSingle';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FinLogsList />} />
      <Route path='/finlogs/add' element={<FinLogAdd />} />
      <Route path='/posts' element={<PostsList />} />
      <Route path='/posts/:postId' element={<PostSingle />} />
      <Route path='/posts/add' element={<PostAdd />} />
      <Route path='/postsRTK' element={<PostsRTKList />} />
      <Route path='/postsRTK/:postId' element={<PostRTKSingle />} />
      <Route path='/postsRTK/add' element={<PostRTKAdd />} />
      <Route path='/postsRTK/update/:postId' element={<PostRTKUpdate />} />
    </Routes>
  );
}

export default App;
