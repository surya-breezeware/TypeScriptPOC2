// Aliases is like creating a data type, here we can create a type and use it like other datatype and use it function and ecpect same return type
type user = {
  name: string
  age: number
  email: string
}

function createUser(user: user): user {
  return user
}

createUser({ name: 'surya', age: 21, email: 's@gmail.com' })

export {}
