// get random number between 0 and 12
// let op1 = Math.floor(Math.random() * 13);
// let op2 = Math.floor(Math.random() * 13);

// $('#op1').text(op1);
// $('#op2').text(op2);

// $('#answer').on('input', function() {
//     let answer = $(this).val();
//     if (answer == op1 + op2) {
//         $('#answer').css('background-color', 'green');
//     } else {
//         $('#answer').css('background-color', 'red');
//     }
// });

fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((people) => {
            $(".peoples").append(`
                <div class="people">
                <div class="name">Name: ${people.name}</div>
                <div class="age">Age: ${people.age}</div>
                <div class="streetName">Street: ${people.address.street}</div>
                <div class="city">City: ${people.address.city}</div>
                <div class="state">State: ${people.address.state}</div>
                </div>
            `)
        });
});











