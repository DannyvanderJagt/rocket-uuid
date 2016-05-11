let UID = {
  /**
   * Generate an id.
   * @param  {Number} length - The number of ids. (1 = 6 characters long)
   * @return {String} The generated id.
   */
  generate(length = 1) {
    let id = ''
    for (let i = 0; i < length; i++) {
      id += UID._generate()
    }
    return id
  },

  /**
   * Generate an id.
   * @return {String} One id.
   */
  _generate() {
    return (
    '0000' + (
    (Math.random() * 1400 * Math.pow(36, 4)) +
    ((new Date().getTime()) / 10000)
    ) | 0)
      .toString(36).slice(-6)
  }
}

export default UID.generate
