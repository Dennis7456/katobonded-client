import React, {
  useState,
  MouseEvent,
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  TextareaHTMLAttributes,
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './ChatBotModal.css'
import chatboticon from '../ChatBot/assets/pngwing.png'
import ChatBot from '../ChatBot/ChatBot'
import { analyzeNextSteps } from './HelperFunctions/anaLyzeNextSteps'

// interface User {
//   email: string
//   password: string
// }

interface ResponseObject {
  purpose: string
  message: string
  options?: string[]
  sender: string
}

export const ChatBotModal: React.FC = () => {
  const [userResponse, setUserResponse] = useState<string>('')
  const [ShowModal, setShowModal] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [userResponse, setUserResponse] = useState<string>("");
  // const [user, setUser] = useState<User>({ email: '', password: '' })
  const [step, setStep] = useState<number>(0)
  const [botResponse, setBotResponse] = useState<ResponseObject>({
    purpose: '',
    message: '',
    sender: 'bot',
  })
  const [sendUserResponse, setSendUserResponse] = useState<string>('')

  // setting next step when there's response and option click
  const setNextStep = (response: string): void => {
    setStep((prevState) => prevState + 1)
    setSendUserResponse(response)
    const res = analyzeNextSteps(step, response)
    setBotResponse({ ...res, sender: 'bot' })
    setUserResponse('')
  }

  const optionClick = (e: React.MouseEvent<HTMLElement>): void => {
    const option = e.currentTarget.dataset.id
    if (option !== null && option !== undefined && typeof option === 'string') {
      setNextStep(option)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setUserResponse(value)
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent,
  ) => {
    e.preventDefault()
    if (showPassword) {
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // auth
  }

  return (
    <>
      <div
        className="chatboticon mt-[25px] flow-root float-right drop-shadow-lg cursor-pointer"
        onClick={() => {
          setShowModal(true)
        }}
      >
        <img className="w-[100px] object-right-bottom" src={chatboticon} />
      </div>
      {ShowModal ? (
        <>
          {/* modal */}
          <div className="modal-bg z-50">
            <div className=" opacity-100 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              {' '}
              <div className="rounded relative w-full py-[40px] mx-auto max-w-lg">
                {/* content */}
                <form onSubmit={handleSubmit}>
                  <div className="bg-[#fff] border-0 rounded-md shadow-lg relative flex flex-col w-full bg-on_primary outline-none focus:outline-none">
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
                        onClick={() => {
                          setShowModal(false)
                        }}
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
                          value={userResponse}
                          className=" border-[#E8E8ED] px-[10px] pr-[48px] focus:border-gray-500 focus:bg-on_secondary text-[20px] ml-[2px] required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 focus:outline-none focus:shadow-outline text-gray-600 dark:text-on_background bg-gray-200"
                          rows={3}
                          // cols={40}
                        ></textarea>
                        <span className="absolute left-[422px] top-[60px] bg-info hover:text-on_primary hover:bg-primary p-[12px] mr-[2px] rounded-br-md cursor-pointer text-on_primary">
                          <FontAwesomeIcon
                            icon={regular('paper-plane')}
                            size="xl"
                          />
                        </span>
                      </div>
                      {/* <input 
                      onChange={handleChange} 
                      name='user-response' 
                      id="user-response" 
                      type='text' 
                      value={userResponse}
                      className="bg-gray required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-2 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background"
                      ></input> */}
                    </div>
                    <div></div>
                    {/* body */}
                    {/* <div className="relative p-6 flex-auto">
                      <div>
                        <label className="pb-2 text-start block text-sm font-light text-gray-600">
                          Email
                        </label>
                        <input
                          className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background"
                          id="email"
                          type="text"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                        ></input>
                      </div>
                      <label className=" pt-5 pb-2 text-start block text-on-background text-sm font-light dark:text-on_primary">
                        Password
                      </label>
                      <span className="flex justify-end items-center">
                        {showPassword ? (
                          <input
                            className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background"
                            id="password"
                            type="text"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                          ></input>
                        ) : (
                          <input
                            className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                          ></input>
                        )}
                        <button
                          className="absolute mr-4 hover:text-info "
                          onClick={handleClick}
                        >
                          {showPassword ? (
                            <FontAwesomeIcon
                              icon={regular('eye')}
                              className="dark:text-on_background hover:text-info"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={regular('eye-slash')}
                              className="dark:text-on_background hover:text-info"
                            />
                          )}
                        </button>
                      </span>
                    </div> */}
                    {isLoggedIn ? (
                      <p className="text-success">
                        You are logged in successfully
                      </p>
                    ) : null}
                    {/* footer */}
                    {/* <div className="flex justify-center items-center border-solid border-slate-200 rounded-b">
                      <div className="flex justify-center items-center h-20">
                        <button
                          className="dark:text-on_primary dark:outline-0 border-black dark:border-on_primary border-2 px-10 py-1 rounded-md font-semibold text-black hover:bg-secondary hover:text-on_primary active:bg-tertiary_container"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div> */}
                    {/* <div className="font-light text-on_background text-xs pt-0 mx-1 pb-5 dark:text-on_primary">
                      This site is protected by reCAPTCHA and the google{' '}
                      <a
                        className="text-primary hover:text-on_primary-container hover:font-semibold dark:text-on_primary"
                        href="#"
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href="#"
                        className="text-primary hover:text-on_primary-container hover:font-semibold dark:text-on_primary"
                      >
                        Terms of Service apply
                      </a>
                    </div> */}
                    {/* <div className="flex justify-around items-center text-on-surface-variant">
                      <div className="px-3 py-2 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-secondary">
                        <a href="/register">Register</a>
                      </div>
                      <div className="px-3 py-5 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-secondary">
                        <a>Forgot Password</a>
                      </div>
                    </div> */}
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
