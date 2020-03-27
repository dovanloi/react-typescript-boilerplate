import { IROUTE } from '@interfaces'
/**
 * COMPONENTS
 */
import Home from '@pages/Home';
import Post from '@pages/Post'

export const routes: IROUTE[] = [
  {
    path: ['/'], exact: true, name: 'Home', component: Home
  },
  {
    path: ['/post'], exact: true, name: 'Post', component: Post
  }
];