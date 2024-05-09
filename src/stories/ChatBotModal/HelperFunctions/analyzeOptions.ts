export const analyzeOptions = (
  userResponse: string,
): {
  purpose: string
  message: string
  options?: string[]
} => {
  if (userResponse.toLowerCase() === 'login') {
    return {
      purpose: '',
      message: 'You will be redirected to the login page shortly!',
      options: [],
    }
  } else if (userResponse.toLowerCase() === 'register') {
    return {
      purpose: '',
      message: 'You will be redirected to the registration page shortly!',
      options: [],
    }
  } else {
    // Default return statement in case no condition is met
    return {
      purpose: '',
      message: 'Sorry, I did not understand that.',
      options: [],
    }
  }
}
