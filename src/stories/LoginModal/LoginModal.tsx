import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useRef,
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './LoginModal.css'
import { useLoginModalContext } from 'src/context/LoginModalContext'

interface User {
  email: string
  password: string
}

export const LoginModal: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useLoginModalContext()
  const [ShowModal, setShowModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User>({ email: '', password: '' })
  const clickRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {

  //   document.addEventListener('mousedown', handleOutsideClick);
  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, [isModalOpen]);

  // const handleOutsideClick = (e: MouseEvent): void => {
  //   if (isModalOpen && clickRef.current !== null && !clickRef.current.contains(e.target as Node)) {
  //     closeModal();
  //   }
  // }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
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
        className="flex flex-col cursor-pointer inset-0"
        onClick={openModal}
        // ref={clickRef}
      >
        <FontAwesomeIcon
          className="py-[5px]"
          icon={regular('user')}
          size="lg"
          style={{ color: '#ffffff' }}
        />
        <div className="">Agent Login</div>
      </div>
      {isModalOpen ? (
        <>
          {/* modal */}
          <div className="modal-bg z-50">
            <div className=" opacity-100 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              {' '}
              <div className="rounded relative w-full my-6 mx-auto max-w-xs">
                {/* content */}
                <form onSubmit={handleSubmit}>
                  <div className="bg-[#fff] border-0 rounded-md shadow-lg relative flex flex-col w-full bg-on_primary outline-none focus:outline-none">
                    {/* header */}
                    <div className="flex items-center justify-center p-5 border-solid border-slate-200 rounded-t">
                      <h3 className="text-2xl font-semibold text-center text-gray-600">
                        Login
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 opacity-60 text-error float-right text-3xl leading-none font-semibold outline-none focus:outline-none cursor-pointer bg-red"
                        onClick={closeModal}
                      >
                        <FontAwesomeIcon
                          icon={solid('circle-xmark')}
                          className=""
                        />
                      </button>
                    </div>
                    {/* body */}
                    <div className="relative p-6 flex-auto">
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
                    </div>
                    {isLoggedIn ? (
                      <p className="text-success">
                        You are logged in successfully
                      </p>
                    ) : null}
                    {/* footer */}
                    <div className="flex justify-center items-center border-solid border-slate-200 rounded-b">
                      <div className="flex justify-center items-center h-20">
                        <button
                          className="dark:text-on_primary dark:outline-0 border-black dark:border-on_primary border-2 px-10 py-1 rounded-md font-semibold text-black hover:bg-secondary hover:text-on_primary active:bg-tertiary_container"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                    <div className="font-light text-on_background text-xs pt-0 mx-1 pb-5 dark:text-on_primary">
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
                    </div>
                    <div className="flex justify-around items-center text-on-surface-variant">
                      <div className="px-3 py-2 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-secondary">
                        <a href="/register">Register</a>
                      </div>
                      <div className="px-3 py-5 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-secondary">
                        <a>Forgot Password</a>
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
