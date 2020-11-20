import React, {useState} from 'react'
import styles from './index.less'

import {DynamicWrap, DynamicWrapProp} from './DynamicWrap'
const app2Data: DynamicWrapProp<null> = {
  system: {
    url: 'http://www.jeremypay.com/lab/mflab/app2/dist/remoteEntry.js',
    scope: 'app2',
    module: './Widget',
  },
}

interface HelloProps {
  compiler: string
  framework: string
}

const app3Data: DynamicWrapProp<HelloProps> = {
  system: {
    url: 'http://localhost:8002/emp.js',
    scope: 'demo2',
    module: './components/Hello',
  },
  widgetProps: {
    compiler: 'compilerText',
    framework: 'frameworkText',
  },
}

const DynamicDemo = (): any => {
  const [wrapData, setWrapData] = useState<DynamicWrapProp<any>>()

  function setApp2() {
    // https://www.jeremypay.com/lab/mflab/app2/dist/remoteEntry.js
    setWrapData(app2Data)
  }

  function setApp3() {
    // https://www.jeremypay.com/lab/mflab/app2/dist/remoteEntry.js
    setWrapData(app3Data)
  }

  return (
    <>
      <h1>Hello Dynamic System Host</h1>
      <button onClick={setApp2}>常规MF组件动态加载</button>
      <button onClick={setApp3}>EMP组件动态加载</button>
      <div style={{marginTop: '2em'}}>{wrapData ? <DynamicWrap {...wrapData} /> : <></>}</div>
    </>
  )
}

const DemoPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <DynamicDemo />
    </div>
  )
}

export default DemoPage
