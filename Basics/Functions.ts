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

export {}
