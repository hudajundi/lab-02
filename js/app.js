'use strict'; 
console.log('i am here');
let allInfo = [];

function ZooGallery(animal){
    this.title = animal.title;
    this.image_url= animal.image_url;
    this.description = animal.description;
    this.keyword = animal.keyword;
    this.horns = animal.horns;


    allInfo.push(this);
}




ZooGallery.prototype.picViewer = function(){

//    $(".keySearch").text(this.keyword)
let myAnimal = $('.photo-template').clone();
let Options = $('<option></option>').text(this.keyword);
$('select').append(Options);


    // let myAnimal = $(".photo-template").clone();
    $('main').append(myAnimal); /// what inside the template:
    myAnimal.find("h2").text(this.title);
    myAnimal.find("img").attr("src", this.image_url);
    myAnimal.find("p").text(this.description);
    myAnimal.find("span").text(this.keyword);
    myAnimal.find("b").text(this.horns);
    myAnimal.removeClass('photo-template');
    myAnimal.attr('id', 'horns');

};

ZooGallery.readJson = () =>{
    const ajaxSettings = {
        method: 'get',
        dataType: 'json',

    };

    $.ajax('data/page-1.json' , ajaxSettings)
    .then (data => {
        data.forEach(newAnimal => {
            let pet = new ZooGallery(newAnimal);
            pet.picViewer();


        });

    }
        ); 
};

$(()=> ZooGallery.readJson());


$(document).ready(function () {
    $('select').on('change', function() {
      let selected = this.value;
      $('section').hide();
      $(`.${selected}`).show();
    });
  });
  