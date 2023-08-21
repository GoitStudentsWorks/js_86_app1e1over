import axios from 'axios';
import { sprite } from '../../image/sprite.svg';
import {showPreloader, hidePreloader} from "../Preloader/Preloader"
function padEndRating(subj) {
  subj = subj.toString();
  if (subj.length === 1) {
    return subj + '.0';
  } else {
    if (subj.length > 3) {
      return subj.slice(0, 3);
    }
  }
  return subj;
}

function makeStar(active) {
  let res;
  if (active) {
    res = makeSvg(`${sprite}#icon-star-active`, 'recepie-card-star');
  } else {
    res = makeSvg(`${sprite}/icon-unactive-star`, 'recepie-card-star');
  }
  res.setAttribute('width', '18');
  res.setAttribute('height', '18');
  return res;
}

function makeSvg(src, clas) {
  let svg = document.createElement('svg');

  svg.className = clas;
  svg.innerHTML = `<use href="${src}"></use>`;
  return svg;
}

export function Update() {
  let req = MakeRequestString();
  console.log(req);
  let cont = document.querySelector('.recipe-container');
  axios
    .get(req)
    .then(v => v.data.results)
    .then(recepies => {
      showPreloader();
      for (let recipe of recepies) {
        cont.append(DrawCard(recipe));
      }
    }).finally(()=>{
      hidePreloader();
    });
}
function DrawCard(recipe) {
  let cont = document.createElement('div');
  cont.classList.add('recipe-card-container');

  //creating background image
  let bg = document.createElement('img');
  bg.src = recipe.thumb;
  bg.classList.add('recipe-card-bg');

  let wrap = document.createElement('div');
  wrap.classList.add('recipe-card-wrap');

  let textContainer = document.createElement('div');
  textContainer.classList.add('recipe-card-text');
  let name = document.createElement('p');
  name.classList.add('recipe-card-title');
  name.innerText = recipe.title;

  let description = document.createElement('p');
  description.classList.add('recipe-card-description');
  description.innerText = recipe.description;

  let like = document.createElement('button');
  like.classList.add('heart-button');
  like.classList.add('recipe-card-like-btn');
  like.innerText = 'like';
  like.dataset.recipe = JSON.stringify(recipe);

  let lowerContainer = document.createElement('div');
  lowerContainer.classList.add('recipe-card-lower-container');

  let rating = document.createElement('div');
  rating.classList.add('recipe-card-rating');
  rating.innerText = padEndRating(recipe.rating);
  for (let i = 1; i <= 5; i++) {
    if (Math.floor(recipe.rating - i) >= 0) {
      rating.appendChild(makeStar(true));
    } else {
      rating.appendChild(makeStar(false));
    }
  }
  lowerContainer.appendChild(rating);

  let seeRecep = document.createElement('div');
  seeRecep.classList.add('recipe-card-see-recipe');
  seeRecep.innerText = 'See recipe';
  lowerContainer.appendChild(seeRecep);

  cont.appendChild(bg);
  textContainer.appendChild(name);
  textContainer.appendChild(description);
  cont.appendChild(like);

  wrap.appendChild(textContainer);
  wrap.appendChild(lowerContainer);

  cont.appendChild(wrap);
  return cont;
}

function MakeRequestString() {
  const selectIngredients = document.getElementById('selectIng');
  const selectCountry = document.getElementById('selectCountry');
  const selectTime = document.getElementById('selectTime');
  const search = document.querySelector('.search');
  const category = document.getElementById('categories');
  const paginator = document.getElementById('pagination');
  let obj = {
    category: category,
    page: paginator,
    time: selectTime,
    area: selectCountry,
    ingredients: selectIngredients,
  };
  let first = true;

  let str = 'https://tasty-treats-backend.p.goit.global/api/recipes';
  for (let key in obj) {
    if (obj[key] != undefined && obj[key] != null) {
      let val = obj[key].value;
      if (val != undefined && val.trim() != '') {
        if (!first) {
          str += '&';
        } else {
          str += '?';
          first = false;
        }
        str += key + '=' + obj[key].value;
      }
    }
  }
  return str;
}
Update();
