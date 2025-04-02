import binaryConverter from './binaryConverter'



describe('binaryConverter', () => {
  test('component returns the correct value of asci character to binary -> 00110001', () => {
    const expected = '00110001';
    const result = binaryConverter('1')

    expect(result).toEqual(expected)

  })

  test('component returns the correct value of asci character to binary -> 00110001', () => {
    const expected = '01110011011011000111001101101110';
    const result = binaryConverter('slsn')

    expect(result).toEqual(expected)

  })
})
