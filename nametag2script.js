console.log('Welcome to JavaScript Events');

const submit = document.getElementById('submit');
const my_input = document.getElementById('my_input');
const cornelius = document.getElementById('cornelius');

const btnClicked = (event) => {
    console.log(event.target.id)



    cornelius.innerHTML = my_input.value;

    // switch(event.target.id){
    //     case 'submit':
    //         response.innerHTML = 'Edited for Family Friendly Places'
    //         my_input.value = '';
    //         break;
    //     // case 'nsfw':
    //     //     response.innerHTML = 'How dare you?'
    //     //     break;
    //     // case 'water':
    //     //     response.innerHTML = 'Drinking ' + my_input.value;
    //     //     break;
    //     // case 'tuperware':
    //     //     response.innerHTML = my_input.value;
    //     //     break;
    // }
}

submit.addEventListener('click', btnClicked);


