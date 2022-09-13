const myFunc = (num: number, val: string) => {
  return num + val
}

myFunc(25, 'asfas')

const myFunc2 = (
  name: string = 'surya',
  email: string = 's@gmail.com',
  signedIn: boolean = false,
) => {}

myFunc2()

const myFunc3 = (): string => {
  return ''
}

const myFunc4 = (): void => {
  console.log('This is a void Function')
}

// never data type will never have a value and void will have undefined or null

const myFunc5 = (errMsg): never => {
  throw new Error(errMsg)
}

myFunc4()
myFunc5('Error')

export {}
