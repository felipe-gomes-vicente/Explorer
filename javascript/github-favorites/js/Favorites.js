export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    .then(({ login, name, public_repos, followers }) => ({
      login, 
      name, 
      public_repos, 
      followers 
    }))
  }
}

// classe que vai conter a lógica dos dados
// como os dados serão estruturados 
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()

    GithubUser.search("diego3g").then(user => console.log(user))
  }

  load() {
     this.entries = JSON.parse(localStorage.getItem
    ("@github-favorites:")) || []  
  }

  async add(username) {
    const user = await GithubUser.search(username)

    console.log(user)
  }

  delete(user) {
    const filteredEntries = this.entries
      .filter(entry => entry.login !== user.login)

      this.entries = filteredEntries
      this.update()
  }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody")

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector(".search button")
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input")

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()
    
    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector(".user img").src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Imagem de ${user.name}`
      row.querySelector(".user p").textContent = user.name
      row.querySelector(".user span").textContent = user.login
      row.querySelector(".repositories").textContent = user.public_repos
      row.querySelector(".followers").textContent = user.followers
      
      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha?")
        if(isOk) {
          this.delete(user)
        }
      }
      
      this.tbody.append(row)
    })
    
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img
          src="https://github.com/felipe-gomes-vicente.png"
          alt="Imagem de perfil"
        />
        <a href="https://github.com/felipe-gomes-vicente" target="_blank">
          <p>Felipe Vicente</p>
          <span>felipe-vicente</span>
        </a>
      </td>
      <td class="repositories">40</td>
      <td class="followers">30</td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `
     return tr
  }
  
  removeAllTr() {
    this.tbody.querySelectorAll("tr")
      .forEach((tr) => {
        tr.remove()
      })
  }
}
