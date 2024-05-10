import React, { useState, useEffect, useRef } from 'react'
import './ChatBot.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface Props {
  userResponse: {
    purpose: string
    message: string
    options?: string[]
    sender: string
    time: string
  }

  botResponse: {
    purpose: string
    message: string
    options?: string[]
    sender: string
    time: string
  }
  sendUserResponse: {
    purpose: string
    message: string
    options?: string[]
    sender: string
    time: string
  }

  optionClick: (ev: React.MouseEvent<HTMLElement>) => void
}

interface MessagesInfo {
  purpose?: string
  message: string
  options?: string[]
  sender: string
  time: string
}

const ChatBot: React.FC<Props> = (props) => {
  const [messages, setMessages] = useState<MessagesInfo[]>([
    {
      message: 'Hi there! How can I assist you today?',
      sender: 'bot',
      time: '10:00 AM',
    },
    {
      message: "Hello! I'm looking for information on your products.",
      sender: 'user',
      time: '10:05 AM',
    },
    {
      message:
        "Sure, I'd be happy to help. What specifically are you interested in?",
      sender: 'bot',
      time: '10:10 AM',
    },
    {
      message:
        "I'm interested in learning about your latest smartphone models.",
      sender: 'user',
      time: '10:15 AM',
    },
    {
      message:
        'We have several models available. Would you like me to provide some details?',
      sender: 'bot',
      time: '10:20 AM',
    },
    { message: 'Yes, please.', sender: 'user', time: '10:25 AM' },
    {
      message:
        'Our latest smartphone models include the X1, X2, and X3. Each offers unique features and specifications. Which one are you most interested in?',
      sender: 'bot',
      time: '10:30 AM',
    },
    {
      message:
        "I'm interested in the X2. Can you tell me more about its camera features?",
      sender: 'user',
      time: '10:35 AM',
    },
    {
      message:
        'Certainly! The X2 features a dual-lens camera system with advanced image processing capabilities. It offers high-resolution photos and videos, along with various shooting modes and editing tools.',
      sender: 'bot',
      time: '10:40 AM',
    },
    {
      message:
        "That sounds great! I'll definitely consider the X2. Thanks for your help.",
      sender: 'user',
      time: '10:45 AM',
    },
  ])
  const dummyRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const tempArray = [...messages]
    tempArray.push({
      message: props.sendUserResponse.message,
      sender: props.sendUserResponse.sender,
      time: props.sendUserResponse.time,
    })
    setMessages(tempArray)
    console.log(messages)
  }, [props.sendUserResponse])

  // useEffect(() => {
  //   bodyRef.current?.scrollTo?.({
  //     top: bodyRef.current.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }, [messages]);

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // stacking up messages
  // useEffect(() => {
  //   if (messages.length === 0) {
  //     setMessages([
  //       {
  //         purpose: 'introduction',
  //         message:
  //           'Hi there. If you are here, that means you need a vacation. Might I suggest a relaxing beach getaway or perhaps an adventurous mountain retreat?',
  //         sender: 'bot',
  //         options: ['Ask a question', 'Login', 'Register'],
  //       },
  //     ])
  //   } else {
  //     const tempArray = [...messages]
  //     tempArray.push({ message: props.sendUserResponse, sender: 'user' })
  //     setMessages(tempArray)

  //     setTimeout(() => {
  //       const temp2 = [...tempArray]
  //       temp2.push(props.botResponse)
  //       setMessages(temp2)
  //     }, 1000)
  //   }
  // }, [props.sendUserResponse, props.botResponse])

  // enable autoscroll after each message
  // useEffect(() => {
  //   bodyRef.current?.scrollTo?.({
  //     top: dummyRef.current?.offsetTop,
  //     behavior: 'smooth',
  //   })

  //   if (dummyRef.current !== null && bodyRef.current !== null) {
  //     bodyRef.current.scrollTo({
  //       top: dummyRef.current.offsetTop,
  //       behavior: 'smooth',
  //     })
  //   }

  //   // console.log(messages);
  // }, [props.sendUserResponse])

  // useEffect(() => {
  //   bodyRef.current?.scrollTo?.({
  //     top: bodyRef.current.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }, [props.sendUserResponse]);

  return (
    <div className="max-h-[300px] overflow-y-auto border border-gray-300 p-4">
      {messages.map((chat, index) => (
        <div
          key={`${chat.message}_${index}`}
          className={`${
            chat.sender === 'bot' ? 'flex justify-start' : 'flex justify-end'
          }`}
          ref={bodyRef}
        >
          <div className={`message ${chat.sender} my-[15px]`}>
            {chat.sender === 'bot' ? (
              <span>
                <FontAwesomeIcon icon={solid('robot')} className="text-white" />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={solid('user')} className="text-white" />
              </span>
            )}
            <div className="text-white long-text">{chat.message}</div>
            <div className="flex justify-end text-xs text-white">
              {chat.time}
            </div>
            {/* <p className="text-on_primary py-[0px] long-text">{chat.message}</p> */}
          </div>
          <div ref={messagesEndRef}></div>
          {/* {dummyRef.current !== null && bodyRef.current !== undefined && (
<div ref={dummyRef} className="dummy-div"></div>
)} */}
        </div>
      ))}
    </div>
    // <div className="message-container">
    //   {messages.map((chat, index) => (
    //     <div
    //       key={`${chat.message}_${index}`}
    //       className="my-[5px] text-left"
    //       ref={bodyRef}
    //     >
    //       <div className={`message ${chat.sender}`}>
    //         <p className="text-on_primary">{chat.message}</p>
    //       </div>
    //       {chat.options !== null && chat.options !== undefined ? (
    //         <div className="options">
    //           <div className="text-gray-900">
    //             <FontAwesomeIcon icon={regular('hand-pointer')} />
    //           </div>
    //           {chat.options.map((option) => (
    //             <p
    //               onClick={(e) => {
    //                 props.optionClick(e)
    //               }}
    //               data-id={option}
    //               key={option}
    //               className="bg-info text-on_primary hover:bg-primary px-[10px] rounded-[3px] "
    //             >
    //               {option}
    //             </p>
    //           ))}
    //         </div>
    //       ) : null}
    //       {dummyRef.current !== null && bodyRef.current !== undefined && (
    //         <div ref={dummyRef} className="dummy-div"></div>
    //       )}
    //     </div>
    //   ))}
    // </div>
  )
}

export default ChatBot
