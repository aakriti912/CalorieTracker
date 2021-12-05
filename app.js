const name = document.getElementById('item-name');
const calorie = document.getElementById('item-calories');
const totalcalorie = document.querySelector('.total-calories');




function clear() {
    name.value = '';
    calorie.value = '';
}

totalcalorie.textContent = calorie.value + calorie.value;



document.querySelector('.clear-btn').addEventListener('click', function() {

    clear();
    document.querySelector('.invalid-feedback').innerHTML = "";

});









name.addEventListener('keyup', function() {
    if (name.value !== '') {
        let re = /^[a-zA-Z]{2,9}$/;
        if (!re.test(name.value)) {
            document.querySelector('.invalid-feedback').innerHTML = "only letter";
            document.querySelector('.invalid-feedback').style.color = "red";

        } else {
            document.querySelector('.invalid-feedback').innerHTML = ' ';

        }
    }
});
document.querySelector('.add-btn').addEventListener('click', function() {
    if (name.value !== '' || calorie.value !== '') {
        document.querySelector('.collection').innerHTML +=
            `
            
    <li class="collection-item" id="item-0">
    <strong>${name.value}: </strong> <em>${calorie.value} Calories</em>
    <a href="#" class="secondary-content">
      <i class="fa fa-pencil ei"></i>
    </a>
  </li>

    `;

    } else {
        document.querySelector('.message').textContent = "fill the form";
        document.querySelector('.message').style.color = "red";
    }

    clear();

})


document.querySelector('.collection').addEventListener('click', (e) => {
    const Add = document.querySelector('.add-btn');
    const edit = document.querySelector('.update');

    if (e.target.classList.contains('ei')) {




        edit.innerHTML = `<button class="delete-btn btn red delete"><i class="fa fa-remove"></i> Delete Meal</button>
        <button class="update-btn btnw orange update"><i class="fa fa-pencil-square-o"></i> Update Meal</button>`;
        Add.style.display = 'none';


        calorie.value = calorie;
        name.value = name;

    }
})




document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});



document.querySelector('.back').addEventListener('click', () => {


    document.querySelector('.add-btn').style.display = 'block';
    document.querySelector('.delete').style.display = 'none';
    document.querySelector('.update').style.display = 'none';


})
document.querySelector('.update').addEventListener('click', (e) => {


    if (e.target.parentElement.classList.contains('collection')) {
        const name = e.target.parentElement.previousElementSibling.textContent;
        const calorie = e.target.parentElement.textContent;
        const data = {
            name,
            calorie
        }
        fillForm(data) {
            this.name.value = data.name;
            this.calorie.value = data.calorie;
        }
        fillForm(data);

    }
});
// document.querySelector('.collection').innerHTML +=
//             `

//     <li class="collection-item" id="item-0">
//     <strong>${name.value}: </strong> <em>${calorie.value} Calories</em>
//     <a href="#" class="secondary-content">
//       <i class="fa fa-pencil ei"></i>
//     </a>
//   </li>`;


// document.querySelector('.delete').addEventListener('click', () => {
//     console.log(dlete);
// console ma vako print vairako xaina

// document.querySelector('.collection').remove();

// })