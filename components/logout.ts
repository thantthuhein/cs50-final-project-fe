import axios from 'axios'

export function logout(element: HTMLButtonElement) {
    element.addEventListener('click', async (event) => {
        event.preventDefault()

        const url = `${import.meta.env.VITE_SHORTEN_SERVER_URL}${import.meta.env.VITE_SHORTEN_LOGOUT_URL}`

        await axios.post(url, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
        })
        .then(response => {
            if (response.status == 200) {
                localStorage.clear()

                window.close()
            }
        })
        .catch(error => {
            localStorage.clear()
            alert(error)
        })
    })
}