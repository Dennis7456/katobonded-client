import React, {
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  TextareaHTMLAttributes,
  useEffect,
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './ChatBotModal.css'
import chatboticon from '../ChatBot/assets/pngwing.png'
import ChatBot from '../ChatBot/ChatBot'
import { analyzeOptions } from './HelperFunctions/analyzeOptions'
import { useBotModalContext } from 'src/context/BotModalContext'

interface ResponseObject {
  purpose: string
  message: string
  options?: string[]
  sender: string
  time: string
}

export const ChatBotModal: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useBotModalContext()
  const [userResponse, setUserResponse] = useState<ResponseObject>({
    purpose: '',
    message: '',
    sender: '',
    time: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [step, setStep] = useState<number>(0)
  const [botResponse, setBotResponse] = useState<ResponseObject>({
    purpose: '',
    message: '',
    sender: 'bot',
    time: '',
  })
  const [sendUserResponse, setSendUserResponse] = useState<ResponseObject>({
    purpose: '',
    message: '',
    sender: '',
    time: '',
  })
  const clickRef = useRef<HTMLDivElement>(null)

  const getTime = (): string => {
    const currentTime = new Date(Date.now())
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const period = hours >= 12 ? 'PM' : 'AM'
    const formattedHours = hours === 0 ? 12 : hours % 12 // Convert 0 to 12 for 12-hour format
    return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`
  }

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleOutsideClick)
  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick)
  //   }
  // }, [isModalOpen])

  // const handleOutsideClick = (e: MouseEvent): void => {
  //   if (isModalOpen && clickRef.current !== null && !clickRef.current.contains(e.target as Node)) {
  //     closeModal();
  //   }
  // }

  // setting next step when there's response and option click
  // const setNextStep = (response: string): void => {
  //   setStep((prevState) => prevState + 1)
  //   setSendUserResponse(response)
  //   const res = analyzeOptions(response)
  //   setBotResponse({ ...res, sender: 'bot' })
  //   setUserResponse({ options: [], message: '', purpose: '', sender: 'user' })
  // }

  const optionClick = (e: React.MouseEvent<HTMLElement>): void => {
    const option = e.currentTarget.dataset.id
    if (option !== null && option !== undefined && typeof option === 'string') {
      // setNextStep(option)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    // console.log(name, value)
    setUserResponse({ ...userResponse, message: value, sender: 'user' })
  }

  const updateModalWindow = (): void => {
    openModal()
    // setShowModal(true);
    console.log(isModalOpen)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const time = getTime()
    setSendUserResponse({ ...userResponse, time })
    // console.log(sendUserResponse);
    setUserResponse({
      purpose: '',
      message: '',
      sender: '',
      time: '',
    })
  }

  return (
    <>
      <div
        className="chatboticon mt-[25px] flow-root float-right drop-shadow-lg cursor-pointer z-40"
        onClick={() => {
          openModal()
        }}
      >
        <img className="w-[100px] object-right-bottom" src={chatboticon} />
      </div>
      {isModalOpen ? (
        <>
          {/* modal */}
          <div className="modal-bg z-50">
            <div className=" opacity-100 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              {' '}
              <div className="rounded relative w-full py-[40px] mx-auto max-w-lg">
                {/* content */}
                <form onSubmit={handleSubmit}>
                  <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-on_primary outline-none focus:outline-none">
                    {/* header */}
                    <div className="flex items-center justify-center px-[5px] my-[5px] border-solid border-slate-200">
                      {/* <img
                        src={chatboticon}
                        alt=""
                        style={{ height: '60px' }}
                        className='mx-[10px]'
                      ></img> */}
                      <div className="text-2xl mx-[10px] font-semibold text-center text-gray-600">
                        ChatBot
                      </div>
                      <button
                        className="mx-[10px] p-1 ml-auto bg-transparent border-0 opacity-60 text-error float-right text-3xl leading-none font-semibold outline-none focus:outline-none cursor-pointer bg-red"
                        onClick={closeModal}
                      >
                        <FontAwesomeIcon
                          icon={solid('circle-xmark')}
                          className=""
                        />
                      </button>
                    </div>
                    <div className=" border border-gray-600 p-2 m-3">
                      <ChatBot
                        userResponse={userResponse}
                        botResponse={botResponse}
                        sendUserResponse={sendUserResponse}
                        optionClick={optionClick}
                      />
                      <div className="flex items-center justify-between relative">
                        <textarea
                          onChange={handleChange}
                          name="user-response"
                          id="user-response"
                          placeholder="say something"
                          value={userResponse.message}
                          className="textarea border-[#E8E8ED] px-[10px] pr-[48px] focus:border-gray-500 focus:bg-on_secondary text-[20px] ml-[2px] required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 focus:outline-none focus:shadow-outline text-gray-600 dark:text-on_background bg-gray-200"
                          rows={3}
                        ></textarea>
                        <button
                          type="submit"
                          disabled={userResponse.message.length < 2}
                        >
                          <span className="absolute left-[422px] top-[60px] bg-info hover:text-on_primary hover:bg-primary p-[12px] mr-[2px] rounded-br-md cursor-pointer text-on_primary">
                            <FontAwesomeIcon
                              icon={regular('paper-plane')}
                              size="xl"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
