console.log("Let's get this party started!");

const $searchForm = $('#gifSearchForm');
const $gifDiv = $('#gif-div');

$searchForm.on("submit", async function(e){
    e.preventDefault();
    
    let searchWord = $("#gifInput").val();
    $("#gifInput").val("");

    let response = await axios.get(`http://api.giphy.com/v1/gifs/search`, { 
        params: {
            q: searchWord,
            api_key: "P0WYidQzXK7CJ6ocFEynBj897EUoIucg"
        }   
    });
    displayGif(response.data);

});


function displayGif(data){
    let resultLength = data.data.length; 
    let rand = Math.floor(Math.random()*resultLength);
    let $gif = $("<img>", { src :  data.data[rand].images.original.url })
        .css("width", "400px");
    $gifDiv.append($gif);
}

$("#removeBtn").on("click", function(){
    $gifDiv.empty();
});

