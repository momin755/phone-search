document.body.style.backgroundColor='#191030'
const searchPhone = () =>{
    const searchText = document.getElementById('searchText')
    const searchValue = searchText.value
    document.getElementById('spinner').style.display = 'block'
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{ console.log(data.data == null)  
    if(data.data == null){
      document.getElementById('spinner').style.display = 'block'
    }else{
      showPhone(data.data)
      document.getElementById('spinner').style.display = 'none'
    }
  })
  searchText.value=""
  const phoneContainer = document.getElementById('showDisplay')
  phoneContainer.innerHTML =""
   const showFullDetails = document.getElementById('showDetails')
  showFullDetails.innerHTML =""

    
}

const showPhone = phones =>{
    const phoneContainer = document.getElementById('showDisplay')
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.style.textAlign ='center'
        div.innerHTML =  ` <div class="col">
          <div class="card bg-info text-dark rounded-4">
            <img src="${phone.image}" height='350px' width='150px' class="card-img-top rounded-4" alt="...">
            <div class="card-body ">
              <h3 class="card-title">${phone.brand}</h3>
              <h4 class="card-text">${phone.phone_name}</h4>
              <button onclick="showDetails('${phone.slug}')")" class='btn btn-danger'><b>Show Details</b></button>
            </div>
          </div>
        </div>`
            phoneContainer.appendChild(div)
    })
}

const showDetails = phoneId =>{
  document.getElementById('spinner').style.display = 'block'
    const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`
   
    fetch(url)
    .then(res => res.json())
    .then(data =>{ console.log(data.data == null)
      if(data.data == null){
         document.getElementById('spinner').style.display = 'block'
      }
      else{
        showData(data.data)
        document.getElementById('spinner').style.display = 'none'
      }
    })
    const showFullDetails = document.getElementById('showDetails')
    showFullDetails.innerHTML =""
   

}
const showData =(fullData)=>{
  console.log(fullData)
  const showFullDetails = document.getElementById('showDetails')
  const div = document.createElement('div')

  div.innerHTML =  ` <div class="col">
    <div class="card bg-info text-dark rounded-4">
      <img src="${fullData.image}" height='350px' width='150px' class="card-img-top rounded-4" alt="...">
      <div class="card-body">
        <p class="card-title"><b>Name:</b> ${fullData.name}</p>
         <p class="card-title"><b>Slug:</b> ${fullData.slug}</p>
        <p class="card-title"><b>Release Date:</b> ${fullData.releaseDate ? fullData.releaseDate: "Upcoming"}</p>
        <h3 class="card-title"><b>Brand:</b> ${fullData.brand}</h3>
        <p class="card-title"><b>WLAN:</b> ${fullData.others.WLAN}</p>
        <p class="card-title"><b>Bluetooth:</b> ${fullData.others.Bluetooth}</p>
        <p class="card-title"><b>GPS:</b> ${fullData.others.GPS}</p>
        <p class="card-title"><b>NFC:</b> ${fullData.others.NFC}</p>
        <p class="card-title"><b>Radio:</b> ${fullData.others.Radio}</p>
        <p class="card-title"><b>USB:</b> ${fullData.others.USB}</p>
        <p class="card-title"><b>Storage:</b> ${fullData.mainFeatures.storage}</p>
        <p class="card-title"><b>Display-Size:</b> ${fullData.mainFeatures.displaySize}</p>
        <p class="card-title"><b>Chip-Set:</b> ${fullData.mainFeatures.chipSet}</p>
        <p class="card-title"><b>Memory:</b> ${fullData.mainFeatures.memory}</p>
      </div>
    </div>
  </div>`
  showFullDetails.appendChild(div)

}