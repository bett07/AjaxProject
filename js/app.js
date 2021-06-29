$(document).ready(function () {
    $('.modal-container').hide();
    
    $.ajax({
        url: 'https://randomuser.me/api/?results=12&nat=us',
        dataType: 'json',
        success: function (data) {
            let divModalHTML= '';
            var p = "";
            employees = data.results;


            $.each(employees, function(i, employee){
                var img = data.results[i].picture.medium;
                var first = data.results[i].name.first;
                var last= data.results[i].name.last;
                var city = data.results[i].location.city;
                var mail = data.results[i].email;
                p += '<div class ="card" id="' + i + '">';
                p += '<img src ="' + img + '" class="card-img" id="' + i + '">';
                p += '<div class="card-info-container">';
                p += '<h3 class ="card-name" id="' + i + '">' + first + ' ' +last + "</h3>";
                p += '<p class= "card-text" id="' + i + '">' + mail + "</p>";
                p += '<p class ="ca-text" id="' + i + '">' + city + "</p>";
                p += '</div>';
                p += '</div>';

            });

                $('.gallery').html(p);
            //for closed

            
      $('.card').on("click", function () {
        divModalHTML = '';
        let i = this.id;
        // console.log(i);

        divModalHTML += '<div class="modal">';
        divModalHTML += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
        divModalHTML += '<div id="modal' + i + '" class="modal-info-container">';
        divModalHTML += '<img class="modal-img" src="' + data.results[i].picture.large + '" alt="profile picture">';
        divModalHTML += '<h3 id="name' + i + ' class="modal-name cap">' + data.results[i].name.first + ' ' + data.results[i].name.last + ' </h3>';
        divModalHTML += '<p class="modal-text">' + data.results[i].email + ' </p>';
        divModalHTML += '<p class="modal-text cap">' + data.results[0].location.city + ' </p>';
        divModalHTML += '<hr>';
        divModalHTML += '<p class="modal-text">' + data.results[i].phone + ' </p>';
        divModalHTML += '<p class="modal-text">' + data.results[i].location.street.number + ' ' + data.results[i].location.street.name + ', ' + data.results[0].location.city + ', ' + data.results[0].location.state + ' ' + data.results[0].location.postcode + ' </p>';
        divModalHTML += '<p class="modal-text"> BirthDay: ' + data.results[i].dob.date.substring(0, 10) + ' </p>'
        divModalHTML += '</div>'
        divModalHTML += '</div>'

        //add the html for the modal to the modal id
        $('#modal').html(divModalHTML);

        // openning modal container when click on card
        $('.card').on("click", function () {
          $('.modal-container').show();
        });

        // closing the modal container by clicking on the cross
        $('.modal-close-btn').on("click", function () {
          $('.modal-container').hide();
        });
      });

            //search functionality
            var items = document.querySelectorAll(".card");
            var search = document.querySelector('.search-container');
            search.addEventListener("keyup", () => {
                var input = search.value.toLowerCase();
                console.log(input);
                for (let i = 0; i < items.length; i++) {
                    var firstName = data.results[i].name.first;
                    firstName = firstName.toLowerCase();
                    //console.log(first_nam);
                    var last = data.results[i].name.last;
                    last = last.toLowerCase();
                    //console.log(last_nam);
                    var full = firstName + ' ' + last;
                    console.log(full);

                    if ((full.includes(input))) {
                        console.log("matched");

                        items[i].style.display = "";
                    }
                    else
                        items[i].style.display = "none";


                }

            });//input search closed



        }//sucess closed
    })	//ajax closed
});//end of document.ready()