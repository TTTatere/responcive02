function filterGallery(category){

```
const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    if(category === 'all'){
        card.classList.remove('hide');
    }else{

        if(card.classList.contains(category)){
            card.classList.remove('hide');
        }else{
            card.classList.add('hide');
        }

    }

});
```

}

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

document.querySelectorAll('.card img').forEach(img => {

```
img.addEventListener('click', () => {

    modalImg.src = img.src;
    modal.classList.add('show');

});
```

});

modal.addEventListener('click', () => {

```
modal.classList.remove('show');
```

});
