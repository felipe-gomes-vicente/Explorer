// classe que vai conter a lógica dos dados
// como os dados serão estruturados 
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: "felipe-gomes-vicente",
        name: "Felipe Vicente",
        public_repos: "30",
        followers: "30"
      },
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: "120000"
      }
    ]

  }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody")

    this.update()
  }

  update() {
    this.removeAllTr()
    
    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector(".user img").src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      
      
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

