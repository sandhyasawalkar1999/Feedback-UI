let main_div = document.querySelector(".main_container");
// main_div.id = "main";
let symbol_div = document.querySelector(".symbol_div");
let btn = document.querySelector(".btn");
let feedback = document.querySelector(".feedback_UI")
feedback.id ="feedback";

let seletedRating = "";
seletedRating.id="select"
document.getElementById("unhappy").addEventListener("click", () => {
    seletedRating = "unhappy";
    // console.log("unhappy");
});
document.getElementById("neutral").addEventListener("click",() =>{
    seletedRating = "Netral"
});

document.getElementById("satisfied").addEventListener("click",() =>{
    seletedRating = "satisfied";
})


btn.addEventListener("click",(e)=>{
    if(seletedRating == "unhappy")
    {
        feedback.innerHTML =
        `<h1> Thank You !!!</h1>
        <br>
        <br>
        <h2> Feedback : ${seletedRating} </h2>
          <br>
        <h2>We'll use your feedback to improve our customer support.</h2>`;
    }
    if(seletedRating === "Netral"){
        feedback.innerHTML =
        `<h1> Thank You !!!</h1>
        <br>
        <br>
        <h2> Feedback : ${seletedRating} </h2>
          <br>
        <h2>We'll use your feedback to improve our customer support.</h2>`;

    }
    if(seletedRating == "satisfied"){
        feedback.innerHTML =
        `<h1> Thank You !!!</h1>
        <br>
        <br>
        <h2> Feedback : ${seletedRating} </h2>
          <br>
        <h2>We'll use your feedback to improve our customer support.</h2>`;
    }
});