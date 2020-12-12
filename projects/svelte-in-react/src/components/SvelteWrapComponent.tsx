import React, {useRef, createElement, useEffect} from 'react'

export const SvelteWrapComponent = (props: any) => {
  console.log('props.src', props.src)
  props.src.container = useRef(null)
  const renderE = createElement('div', {ref: props.src.container})
  useEffect(() => {}, [])
  console.log('renderE', renderE)
  return renderE
}
