const loadMels = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        // .then(data => displayMels(data))
        .then(data => displayMels(data.meals))
}

const displayMels = (eliment) => {
    const myMelsDiv = document.getElementById('myMelsList')
    myMelsDiv.innerHTML = '';
    eliment.forEach(melsElement => {
        const div = document.createElement('div')
        div.classList.add('col')

        div.innerHTML = `
        <div class="card" style="width: 20rem;" onclick="loadMilsDetails('${melsElement.idMeal}')">
            <img src="${melsElement.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${melsElement.strMeal}</h5>
            <p class="card-text text-muted">Category: ${melsElement.strCategory} </p>
            <p class="card-text">Instructions : ${melsElement.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
       `
        myMelsDiv.appendChild(div)
    });
}

// Search Functionality added ========================
const searchFood = () => {
    const getInput = document.getElementById('searchInput')
    const serchInput = getInput.value;
    loadMels(serchInput)
    getInput.value = ''
}

// meals displayMilsDetails ===========================

const loadMilsDetails = (idMeal) => {
    let url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        // .then(data => displayMels(data))
        .then(data => displayMealsDetails(data))
}

const displayMealsDetails = (data) => {
    let detailsContainer = document.getElementById('detailsContainer');
    let mealsDiv = document.createElement('div');
    mealsDiv.classList.add('card')
    mealsDiv.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${data.strMeal}</h5>
    <p class="card-text text-muted">Category: ${data.strCategory} </p>
    <p class="card-text">Instructions : ${data.strInstructions.slice(0, 200)}</p>
    </div>
    `
    detailsContainer.appendChild(mealsDiv)
}

loadMels('')