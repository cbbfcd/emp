import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {SvelteWrapComponent} from './components/SvelteWrapComponent'
import SvetleComponents from '@emp/svetleComponents/App'
// import SvelteComponent from 'react-svelte'

console.log('==============testing!!!!==============================')
const mysveltedom = new (SvetleComponents as any)({})
console.log('SvetleComponents', mysveltedom)
ReactDOM.render(
  <>
    <div style={{backgroundColor: '#eee', padding: '20px'}}>
      <h2>SvetleComponents Component: Hello!!</h2>
    </div>
    <SvelteWrapComponent src={mysveltedom}></SvelteWrapComponent>
  </>,
  document.getElementById('emp-root'),
)
