
// The business model

export default {

  async getFeedback(): Promise<any> {
    const resp = await fetch('/model/feedback.json')
    return await resp.json()
  },

  async getUsers(): Promise<any> {
    const resp = await fetch('/model/users.json')
    return await resp.json()
  },

  async getAnalytics(): Promise<any> {
    const resp = await fetch('/model/analytics.json')
    return await resp.json()
  }
}

