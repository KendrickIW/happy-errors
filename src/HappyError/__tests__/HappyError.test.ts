import HappyError from '..'

describe('HappyError', () => {
  describe('instance', () => {
    const properties = ['name', 'message', 'stack']

    it.each(properties)('.%s property exists', (property) => {
      const error = new HappyError('Error message')

      expect(error).toHaveProperty(property)
    })
  })
})
