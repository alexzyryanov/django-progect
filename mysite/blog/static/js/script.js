async function postData(url) {
  let response = await fetch(url)

  let answer = await response.json()
  for (i in answer) {
    let image = answer[i]['fields']['image']
    let video = answer[i]['fields']['video']
    let date = new Date(answer[i]['fields']['created_date'])


    let div = document.createElement('div')
    div.className = "content-item"

    let div1 = document.createElement('div')
    div1.className = "content-item-info"
    div.append(div1)

    let a = document.createElement('a')
    a.href = video
    a.target = "_blank"
    a.innerHTML = date.toLocaleString("default", {
      day: "numeric", 
      month: "long", 
      year: "numeric", 
      hour: "numeric",
      minute: "numeric"}).replace(',' ,'')
    div1.append(a)

    let div2 = document.createElement('div')
    div2.className = "content-item-media"
    div.append(div2)

    let img = document.createElement('img')
    img.src = image
    div2.append(img)

    document.querySelector(".content").append(div)
  }
}


let paginator = 2
but.onclick = function () {
  postData(`http://127.0.0.1:8000/api/?page=${paginator}`)
  paginator += 1
}
