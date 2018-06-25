import HappyError from '..'

const add = (num1: number, num2: number) => {
  throw new HappyError('Bad Numbers')
}

const calculator = (oper: string, num1: number, num2: number) => {
  if (oper === 'add') {
    add(num1, num2)
  }
}

const main = () => {
  // tslint:disable-next-line:no-magic-numbers
  calculator('add', 1, 2)
}

describe('HappyError', () => {
  describe('instance', () => {
    const properties = ['name', 'message', 'stack', 'state']

    it.each(properties)('.%s property exists', (property) => {
      const error = new HappyError('Error message')

      expect(error).toHaveProperty(property)
    })

    it('includes the calling function name in stack', () => {
      try {
        main()
      } catch (error) {
        expect(error.stack).toContain('add')
      }
    })
  })
})
