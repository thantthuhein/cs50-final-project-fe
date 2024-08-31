import './style.css';

let isLoggedIn = localStorage.getItem('authToken')

if (isLoggedIn) {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h2>Shorten your URL</h2>
    <label for="current_url">Current URL</label>
    <br/>
    <input id="current_url" type="text" name="current_url" value="" disabled>
    <br/>
    <label for="short_url">Shortened URL</label>
    <br/>
    <input id="short_url" type="short_url" name="short_url" value="" disabled>
    <br/>
    <button id="shorten" type="button">Shorten Now</button>
    <br/>
    <button id="logout" type="button">Logout</button>
  </div>`
  showCurrentUrl(
    document.querySelector<HTMLInputElement>('#current_url')!,
    document.querySelector<HTMLInputElement>('#short_url')!,
  )

  shortenUrl(
    document.querySelector<HTMLButtonElement>('#shorten')!,
    document.querySelector<HTMLInputElement>('#current_url')!,
    document.querySelector<HTMLInputElement>('#short_url')!
  )

  logout(
    document.querySelector<HTMLButtonElement>('#logout')!,
  )
} else {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h2>Login to URL Shortener</h2>
    <label for="username">Username</label>
    <br/>
    <input id="username" type="text" name="username" value="" required>
    <br/>
    <label for="password">Password</label>
    <br/>
    <input id="password" type="password" name="password" value="" required>
    <br/>
    <button id="login" type="button">Login</button>
  </div>`

  attemptLogin(
    document.querySelector<HTMLButtonElement>('#login')!,
    document.querySelector<HTMLInputElement>('#username')!,
    document.querySelector<HTMLInputElement>('#password')!
  )
}