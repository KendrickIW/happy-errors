class HappyError extends Error {
  public state: any
  constructor(message: string) {
    super(message)
    this.state = {}
  }
}

export default HappyError
