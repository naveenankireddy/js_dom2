let ul = document.querySelector('ul');

let data = [
    {
      image:
        "http://data.mavo.io/portfolio/images/pasted-image-1494464667397.png",
      name: "Carwash",
      category: "Painting"
    },
    {
      image:
        "http://data.mavo.io/portfolio/images/pasted-image-1494528264937.png",
      name: "Muck Mouth",
      category: "Painting"
    },
    {
      image:
        "http://data.mavo.io/portfolio/images/pasted-image-1494528646446.png",
      name: "Fishwall",
      category: "Painting"
    },
    {
      image: "http://data.mavo.io/portfolio/images/web-coffe-marilyn.jpg",
      name: "Web Coffe Marilyn",
      category: "Painting"
    },
    {
      image:
        "http://data.mavo.io/portfolio/images/pasted-image-1494903924970.png",
      name: "Web 3 Jules",
      category: "Painting"
    },
    {
      image: "http://data.mavo.io/portfolio/images/web-electric3.jpg",
      name: "Web electric3",
      category: "Painting"
    }
  ];

function showImagesAndButtons () {
    data.forEach(oneObj => {
        let newLi = document.createElement('li');
        let image = document.createElement('img');
        let btn = document.createElement('button');
        btn.innerHTML='click me'
        newLi.append(btn);
        image.src = `${oneObj.image}`;
        newLi.append(image);
        ul.append(newLi);       
        console.log('Inside newLi', newLi.innerHTMl)
    })
}



showImagesAndButtons();