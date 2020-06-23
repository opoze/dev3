class AuthService {
  constructor() {
    this.username = ''
    this.name = ''
    this.token = ''
    this.selectedGroupId = ''
  }

  isLogged() {
    console.log(this.token)
    return this.token.length > 0
  }

  setUser(token, email) {
    console.log(token)
    this.token = token
    this.email = email
  }

  setSelectedGroup(code){
    this.selectedGroupId = code
  }

}

export default new AuthService()
