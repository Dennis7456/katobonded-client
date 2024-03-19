import React, { useState, useEffect, useRef } from 'react'
import './ChatBot.css'

interface Props {
  userResponse: string
  botResponse: {
    purpose: string
    message: string
    options?: string[]
    sender: string
  }
  sendUserResponse: string
  optionClick: (ev: React.MouseEvent<HTMLElement>) => void
}

interface MessagesInfo {
  purpose?: string
  message: string
  options?: string[]
  sender: string
}

const ChatBot: React.FC<Props> = (props) => {
  const [messages, setMessages] = useState<MessagesInfo[]>([])
  const dummyRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  // stacking up messages
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          purpose: 'introduction',
          message:
            "Hi there. If you're here, that means you're looking for a job. Tell me, what's your name?",
          sender: 'bot',
        },
      ])
    } else {
      const tempArray = [...messages]
      tempArray.push({ message: props.sendUserResponse, sender: 'user' })
      setMessages(tempArray)

      setTimeout(() => {
        const temp2 = [...tempArray]
        temp2.push(props.botResponse)
        setMessages(temp2)
      }, 1000)
    }
  }, [props.sendUserResponse, props.botResponse])

  // enable autoscroll after each message
  useEffect(() => {
    bodyRef.current?.scrollTo?.({
      top: dummyRef.current?.offsetTop,
      behavior: 'smooth',
    })
    // if (
    //   dummyRef !== null &&
    //   dummyRef !== undefined &&
    //   dummyRef.current !== undefined &&
    //   dummyRef.current !== null &&
    //   bodyRef !== undefined &&
    //   bodyRef !== null &&
    //   bodyRef.current !== undefined &&
    //   bodyRef.current !== null
    // ) {
    //   bodyRef.current.scrollTo({
    //     top: dummyRef.current.offsetTop,
    //     behavior: 'smooth',
    //   })
    // }
  }, [messages])

  return (
    <div className="message-container" ref={bodyRef}>
      {messages.map((chat) => (
        <div key={chat.message}>
          <div className={`message ${chat.sender}`}>
            <p>{chat.message}</p>
          </div>
          {chat.options !== null && chat.options !== undefined ? (
            <div className="options">
              <div>
                <i className="far fa-hand-pointer"></i>
              </div>
              {chat.options.map((option) => (
                <p
                  onClick={(e) => {
                    props.optionClick(e)
                  }}
                  data-id={option}
                  key={option}
                >
                  {option}
                </p>
              ))}
            </div>
          ) : null}
          {dummyRef.current !== null && bodyRef.current !== undefined && (
            <div ref={dummyRef} className="dummy-div"></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ChatBot
