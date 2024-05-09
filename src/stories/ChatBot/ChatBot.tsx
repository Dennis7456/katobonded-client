import React, { useState, useEffect, useRef } from 'react'
import './ChatBot.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'

interface Props {
  userResponse: {
    purpose: string
    message: string
    options?: string[]
    sender: string
  }

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
            'Hi there. If you are here, that means you need a vacation. Might I suggest a relaxing beach getaway or perhaps an adventurous mountain retreat?',
          sender: 'bot',
          options: ['Ask a question', 'Login', 'Register'],
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

    if (dummyRef.current !== null && bodyRef.current !== null) {
      bodyRef.current.scrollTo({
        top: dummyRef.current.offsetTop,
        behavior: 'smooth',
      })
    }

    console.log(messages)
  }, [messages])

  return (
    <div className="message-container">
      {messages.map((chat, index) => (
        <div
          key={`${chat.message}_${index}`}
          className="my-[5px] text-left"
          ref={bodyRef}
        >
          <div className={`message ${chat.sender}`}>
            <p className="text-on_primary">{chat.message}</p>
          </div>
          {chat.options !== null && chat.options !== undefined ? (
            <div className="options">
              <div className="text-gray-900">
                <FontAwesomeIcon icon={regular('hand-pointer')} />
              </div>
              {chat.options.map((option) => (
                <p
                  onClick={(e) => {
                    props.optionClick(e)
                  }}
                  data-id={option}
                  key={option}
                  className="bg-info text-on_primary hover:bg-primary px-[10px] rounded-[3px] "
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
