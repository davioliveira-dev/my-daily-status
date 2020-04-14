import auth0 from '../../lib/auth0'

const Callback = async(request, response) => {
    await auth0.handleCallback(request,response, { redirectTo: '/app' })
}

export default Callback