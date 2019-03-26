'use strict'

/**
 * Class representing an application.
 */
class App {
  /**
   * Create an application.
   * @param {string} [name=test-app] - Application name.
   */
  constructor (name = 'test-app') {
    this.name = name
    this.count = 0

    this.init()
  }

  /**
   * Render the application.
   * @param {number} number - The number value.
   */
  render (number = 1) {
    console.log(`Name app: ${name}, number: ${number}, count: ${count}`)
  }

  /**
   * Init the application.
   * @param {integer} step  - The step value.
   */
  init (step = 1) {
    this.count += step
  }

  /**
   * Get the name value.
   * @return {string} - The name value.
   */
  getName () {
    return this.name
  }

  /**
   * Get the count value.
   * @return {integer} - The count value.
   */
  getCount () {
    return this.count
  }

  /**
   * Set the count value.
   * @param {integer} count - The count value.
   */
  setCount (count = 0) {
    this.count = count
  }
}

module.exports = App
