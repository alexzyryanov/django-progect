function getCookie(name) {
    let cookieValue = null
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                break
            }
        }
    }
    return cookieValue
}
const csrftoken = getCookie('csrftoken')


async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {'X-CSRFToken': csrftoken, 'Content-Type': 'application/json'},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return await response.json()
}


let paginator = 2
button.onclick = function showNext () {
  postData('http://127.0.0.1:8000/api/', {page: paginator}).then((data) => {for (i in data) {
    let image = data[i]['fields']['image']
    let video = data[i]['fields']['video']
    let date = data[i]['fields']['created_date']


    let div = document.createElement('div')
    div.className = "content-item"

    let div1 = document.createElement('div')
    div1.className = "content-item-info"
    div.append(div1)

    let a = document.createElement('a')
    a.href = video
    a.target = "_blank"
    a.innerHTML = date
    div1.append(a)

    let div2 = document.createElement('div')
    div2.className = "content-item-media"
    div.append(div2)

    let img = document.createElement('img')
    img.src = image
    div2.append(img)

    document.querySelector(".content").append(div)
  }})
  paginator += 1
}

