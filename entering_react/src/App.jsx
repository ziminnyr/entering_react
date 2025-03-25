import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
	const currentYear = new Date() //new Date возвращающая текущую дату, является декларативным стилем
  return createElement('blank', null, [
	//Тэги являются декларативными. Стрелочная функция на кнопке является представлением императивного стиля. getFullYear() - декларативный стиль
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
	//   <p>Текущий год:</p><span>{currentYear.getFullYear()}</span>
    // </>
	//------------
	createElement('div', null,
		[
		createElement('a',{href: 'https://vite.dev', target:'_blank'},
			createElement('img',{src: viteLogo, className: 'logo', alt: 'Vite logo'})
		),

		createElement('a',{href: 'https://react.dev', target:'_blank'},
				createElement('img',{src: reactLogo, className: 'logo', alt: 'React logo'}))
		]),
		createElement('h1', null, 'Vite + React'),
		createElement('div',{className: 'card'},
			createElement('button',{onClick: ()=>setCount(count => count+1)}, `count is ${count}`),
			createElement('p', null, 'Edit ', createElement('code', null, 'src/App.jsx'), 'and save to test HMR')
		),
		createElement('p', {className: 'read-the-docs'}, 'Click on the Vite and React logos to learn more'),
		createElement('p', null, 'Текущий год:'),
		createElement('span', null, currentYear.getFullYear())
	])
}

export default App
