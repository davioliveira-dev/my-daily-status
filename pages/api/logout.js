import auth0 from '../../lib/auth0'

const logout = async(request,response) => {
    await auth0.handleLogout(request,response)
    console.log('sessao destruida')
}

export default logout