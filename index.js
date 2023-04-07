const apiKey = 'TD2pbkc0Sz0rrvWKMzWY+g==vLCotGWaHPPE8WG0'
const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
        },
        contentType: 'application/json',

    }
    /// OPTIONS 


document.getElementById('options').addEventListener('click', () => {
    document.getElementById('abotmeBox').classList.remove('hidden')
    document.getElementById('abotmeBox').innerHTML = `
    <div class="ipfContainer">
        <div class="BtnBox">
            <button id="Xbtn">X</button>
        </div>
        <div class="ipfDesc">
            <div class="ipfText">
                <h1>
                Extension Options</h1>
                <p></p>
            </div>
        </div>
        <div class="optionsInputContainer">
            <p>Category of photos as background</p>
            <input type="text" id="optionsInput" placeholder="example: nature">
        </div>
        <div class="SaveButtonBox">
            <h7 style="color:grey; padding:2px;"">Refresh to update</h7>
            <button id="saveBtn">Save</button>
        </div>
    </div>

    `
    document.getElementById('saveBtn').addEventListener('click', () => {
        let optionInput = document.getElementById('optionsInput')
        localStorage.setItem('bacgroundOption', optionInput.value.toLowerCase())

    })

    document.getElementById('Xbtn').addEventListener('click', () => {
        document.getElementById('abotmeBox').classList.add('hidden')


    })

})






/// IMAGES
fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${localStorage.getItem('bacgroundOption')}`)
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong!")

        }
        return res.json()
    })

.then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author').innerHTML = `
        <p>Author: ${data.user.name}</p>
        `


    })
    .catch(err => {
        document.body.style.backgroundImage = "`url(https://images.unsplash.com/photo-1605510305989-40a12500c2e8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA2NDExOTg&ixlib=rb-4.0.3&q=85)`"
    })


/// QUOTES
const randomQuote = ['man', 'success', 'future', 'failure']
let randomIndex = Math.floor(Math.random() * randomQuote.length)
if (randomIndex <= 0) {
    randomIndex = 1
}

let apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${randomQuote[randomIndex]}`

fetch(apiUrl, options)
    .then(res => {
        if (!res.ok) {
            throw Error('ERROR')
        }
        return res.json()
    })
    .then(data => {
        data.forEach(item => {
            document.getElementById('quote').innerHTML = `
            <div>
            <p>${item.quote}</p>
            <p>~ ${data[0].author}</p>
            </div>
            `
        })
    })
    .catch(err => {
        document.getElementById('quote').innerHTML = "..."
    })

/// TIME



function setTime() {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (hours === 0 || hours <= 9) {
        hours = `0${hours}`
    }
    if (minutes === 0 || minutes <= 9) {
        minutes = `0${minutes}`
    }
    document.getElementById('timer').innerHTML = `${hours}<span id="ddot">:</span>${minutes}`



}


setInterval(setTime, 1000)

setInterval(function() {
    document.getElementById('ddot').style.color = 'white'
}, 2000)
setInterval(function() {
    document.getElementById('ddot').style.color = 'transparent'
}, 2000)

/// WEATHER



navigator.geolocation.getCurrentPosition(position => {

        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)

        .then(res => {
                if (!res.ok) {
                    throw Error('Weather not working!')
                }
                return res.json()
            })
            .then(data => {
                let iconLink = ''
                data.weather.forEach(item => {
                    iconLink = `https://openweathermap.org/img/wn/${item.icon}@2x.png`
                })
                document.getElementById('weather').innerHTML = `
            
            <div class="tempContainer">
                <img src=${iconLink}>
                <p class="temperature">${Math.round(data.main.temp)}°C</p>
                <p class="cityTempName">${data.name}</p>
            </div>
           
           
            `

            })
    })
    /// ABOUT ME BUTTON 
document.getElementById('aboutme').addEventListener('click', () => {
    document.getElementById('abotmeBox').classList.remove('hidden')
    document.getElementById('abotmeBox').innerHTML = `
    <div class="abmContainer">
    <div class="BtnBox">
    <button id="Xbtn">X</button>
    </div>
    <div class="abmDesc">
            <img src="images/aboutme.png">
        <div class="abmText">
            <h1>Hello World!</h1>
            <p class="abmTextPar">My name is Michał and im studying to become front end developer<br><br>It's my first big project and i have a hope that in future i will be able to public more<br><br>Check out my socials:<br><br><span class="thanks">Btw thanks for using my extension</span></p>
        </div>
    </div>
    <div class="socialLinks">
    <a href="https://github.com/bazylcossac" target="_blank"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/mstrojny/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
    <a href="https://www.instagram.com/moreweeedd/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://www.youtube.com/channel/UCM_9_Awh3NhK7EUwAnkT-gg" target="_blank"><i class="fa-brands fa-youtube"></i></a>
    </div>
    </div>
    
    `
    document.getElementById('Xbtn').addEventListener('click', () => {
        document.getElementById('abotmeBox').classList.add('hidden')


    })



})

/// FIND IP

document.getElementById('ipFind').addEventListener('click', () => {

    document.getElementById('abotmeBox').classList.remove('hidden')
    document.getElementById('abotmeBox').innerHTML = `
    <div class="ipfContainer">
    <div class="BtnBox">
    <button id="Xbtn">X</button>
    </div>
    <div class="ipfDesc">
        <div class="ipfText">
            <h1>
            Check where the IP request was sent from!</h1>
            <p></p>
        </div>
    </div>
    <div class="ipInput">
    <input type="text" id="checkInput" placeholder="Paste ip here">
    <button id="chceckBtn">Check</button>
    </div>
    <div id="results">
    </div>
    </div>

    `
    let IpValue = document.getElementById('checkInput')

    chceckBtn.addEventListener('click', () => {
        let IpApiUrl = `https://api.api-ninjas.com/v1/iplookup?address=${IpValue.value}`
        fetch(IpApiUrl, options)
            .then(res => {
                if (!res.ok) {
                    throw Error("Ip checker wont work")
                }
                return res.json()
            })
            .then(data => {
                document.getElementById('results').innerHTML = `
                <div class="rendIpDesc">
                <p class="IpAddres abmTextPar">${data.address}</p>
                <p class="ipcity abmTextPar">Your IP address is from <span class="countryName">${data.country}</span> , <span class="cityName">${data.city}</span></p>
                <p class="ipCoords abmTextPar">Coordinates: Latitude:&nbsp <span class="cords">${data.lat}</span> , Longitude:&nbsp <span class="cords">${data.lon}</span></p>
                </div>
                `
            })
            .catch(err => {
                document.getElementById('results').innerHTML = `<div class="errBox"><p>Cannot find source</p></div>`
            })



        IpValue.value = ''
    })


    document.getElementById('Xbtn').addEventListener('click', () => {
        document.getElementById('abotmeBox').classList.add('hidden')


    })

})

/// DATA GENERATOR

document.getElementById('QRgen').addEventListener('click', () => {
    document.getElementById('abotmeBox').classList.remove('hidden')
    document.getElementById('abotmeBox').innerHTML = `
    <div class="ipfContainer">
    <div class="BtnBox">
    <button id="Xbtn">X</button>
    </div>
    <div class="ipfDesc">
        <div class="ipfText">
            <h1>
            Generate random user data</h1>
            <p></p>
        </div>
       
    </div>
    <div id="generData">
    </div>
 
    </div>`


    let Dataurl = `https://api.api-ninjas.com/v1/randomuser`
    let PasswordUrl = `https://api.api-ninjas.com/v1/passwordgenerator?length=15`
    let Password = ''




    function generateData() {
        fetch(Dataurl, options)
            .then(res => {
                if (!res.ok) {
                    throw Error("Ip checker wont work")
                }
                return res.json()
            })
            .then(data => {

                fetch(PasswordUrl, options)
                    .then(response => response.json())
                    .then(item => {
                        document.getElementById('userPass').textContent = item.random_password
                    })
                document.getElementById('generData').innerHTML = `
            <div class="generatedData">
                <p class="abmTextPar">Username: <span class="username">${data.username}</span></p>
                <p class="abmTextPar">Email: <span class="userEmail">${data.email}</span></p>
                <p class="abmTextPar">Password: <span id="userPass"></span></p>
                <p class="abmTextPar">Name: <span class="userFullName">${data.name}</span></p>
                <p class="abmTextPar">Address: <span class="userAddress">${data.address}</span></p>
            </div>
            <div class="buttonBox">
            <button id="dataBtn">Generate</button>
            </div>
                `
                document.getElementById('dataBtn').addEventListener('click', () => {
                    generateData()
                })
            })

    }


    generateData()

    document.getElementById('Xbtn').addEventListener('click', () => {
        document.getElementById('abotmeBox').classList.add('hidden')


    })

})