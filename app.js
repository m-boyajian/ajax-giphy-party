const $gifContainer = $("#gif-container");
const $searchInput = $("#search-input");

function generateGif (results) {
    let newResults = results.data.length;
    if (newResults) {
        let randomIdx = Math.floor(Math.random() * newResults);
        let $newRow = $("<div>")
        let $newGif = $("<img>", {
            src: results.data[randomIdx].images.original.url,
        });
        $newRow.append($newGif);
        $gifContainer.append($newRow);
    }
}

$("form").on("submit", async function (e) {
    e.preventDefault();

    let searchInput = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=O2pZs1BePDZDBUI6hb3unLWbdSdyLBtd&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips", {
        params: {
            q: searchInput,
            API_key: "O2pZs1BePDZDBUI6hb3unLWbdSdyLBtd"
        }
    });
    generateGif(response.data);
});


$("#remove-btn").on("click", function() {
    $gifContainer.empty();
  });

// console.log("Let's get this party started!");