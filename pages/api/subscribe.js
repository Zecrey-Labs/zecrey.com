const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us6'
})
const listId = '2e554fc37f'

const handler = async (req, res) => {
  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: req.query.address,
      status: 'subscribed'
    })

    res.status(200).json({
      message: 'subscribed',
      contactId: response.id
    })
  } catch (error) {
    res.status(error.status).json({
      message: 'failed',
      error: error.response.body.title
    })
  }
}

export default handler
