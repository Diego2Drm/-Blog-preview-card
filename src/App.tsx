import img from './images/illustration-article.svg';
import avatar from './images/image-avatar.webp'
import { Card } from "./components/Card"

function App() {
  return (
    <>
      <Card
        illustration={img}
        date='Published 21 Dec 2023.'
        title='HTML & CSS foundations'
        paragraph='These languages are the backbone of every website, defining structure, content, and presentation.'
        avatar={avatar}
        name='Greg Hooper'
      />
    </>
  )
}

export default App
