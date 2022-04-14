import { useState, useEffect, useCallback } from 'react'

export const useScroll = () => {
  const [state, setState] = useState({
    lastScrollTop: 0,
    bodyOffset: document.body.getBoundingClientRect(),
    scrollY: document.body.getBoundingClientRect().top,
    scrollX: document.body.getBoundingClientRect().left,
    scrollDirection: '', // down, up
  })
  const [touchY, setTouchY] = useState(0);

  const handleScrollEvent = useCallback((e) => {
    setState((prevState) => {
      const prevLastScrollTop = prevState.lastScrollTop
      const bodyOffset = document.body.getBoundingClientRect()

      return {
        setBodyOffset: bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? 'down' : 'up',
        lastScrollTop: -bodyOffset.top,
      }
    })
  }, [])

  const handleTouchMoveEvent = useCallback((e) => {
    setTouchY(e.changedTouches[0].pageY);
  }, [setTouchY])

  useEffect(() => {
    const scrollListener = (e) => {
      handleScrollEvent(e)
    }
    const touchMoveListener = (e) => {
      handleTouchMoveEvent(e)
    }
    window.addEventListener('scroll', scrollListener)
    window.addEventListener('touchmove', touchMoveListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
      window.removeEventListener('touchmove', touchMoveListener)
    }
  }, [handleScrollEvent, handleTouchMoveEvent])

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
    touchScrollY: touchY
  }
}

export default useScroll