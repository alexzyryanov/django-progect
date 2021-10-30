async function postData(url) {
  let response = await fetch(url)

  let answer = await response.json()
  for (i in answer) {
    let name = answer[i]['fields']['name']
    let image = answer[i]['fields']['image']
    let video = answer[i]['fields']['video']
    // let date = new Date(answer[i]['fields']['created_date']).toLocaleString("default", {
    //   day: "numeric", 
    //   month: "long", 
    //   year: "numeric", 
    //   hour: "numeric",
    //   minute: "numeric"
    // }).replace(',' ,'')


    let div = document.createElement('div')
    div.className = "content-item"
    div.innerHTML = `
    <div class="content-item-info">
      <a href="${video}" target="_blank">${name}</a>
    </div>
    <div class="content-item-media">
      <a href="${video}" target="_blank">
        <img src="${image}" alt="">
      </a>
    </div>`


    document.querySelector(".content").append(div)
    flag = true
  }
}


let flag = true
let paginator = 2


document.addEventListener('scroll', () => {
  if (scrollY === document.body.offsetHeight - document.body.clientHeight) {
    if (flag === true) {
      flag = false
      postData(`/api/?page=${paginator}`)
      paginator += 1
    }
  }
})
