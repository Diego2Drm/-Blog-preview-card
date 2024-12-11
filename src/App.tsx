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
      <div className="text-sm text-center *:text-blue-600 mt-5">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/Diego2Drm/-Blog-preview-card">Diego Ramírez</a>.
      </div>
    </>
  )
}

export default App
