import axios from 'axios'

export function attemptLogin(element: HTMLButtonElement, username: HTMLInputElement, password: HTMLInputElement) {
    element.addEventListener('click', async (event) => {
        event.preventDefault()

        const payload = {
            username: username?.value ?? '',
            password: password?.value ?? ''
        }

        axios.post(import.meta.env.VITE_SHORTEN_SERVER_URL + import.meta.env.VITE_SHORTEN_LOGIN_URL, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            const data = response.data.data

            if (data.access_token) {
                localStorage.setItem('authToken', data.access_token)

                alert('Login Success')
                window.close()
            } else {
                alert(data.message ?? 'Login failed: Token is required')
            }
        })
        .catch(error => {
            const errorMessage = error.response?.data?.data?.message || error.response?.data?.message;

            if (errorMessage) {
                alert(errorMessage)
            } else {
                alert(error)
            }
        })
    })
}