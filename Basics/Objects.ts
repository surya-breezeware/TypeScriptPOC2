let user = {
  name: 'Surya',
  age: 21,
  email: 'surya@breezeware.net',
}

console.log(user, 'user')

const createUser = (user): { name: string; age: number } => {
  console.log(user)

  return user
}

let data = createUser(user)
console.log(data)

export {}
