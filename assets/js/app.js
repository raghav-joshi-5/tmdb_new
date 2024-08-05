let cl = console.log;

cl(movieArray)
let movieContainer = document.getElementById("movieContainer");

let result = '';

for (let i = 0; i < movieArray.length; i++) {
    cl(movieArray[i])
    result += `
   <div class="col-md-4 mb-4">
   <div class="card">
     <figure class="movieCard">
       <img
         src="https://image.tmdb.org/t/p/w1280/${movieArray[i].backdrop_path}"
         alt=""
       />
       <figcaption>
         <!-- // content  -->
         <div class="movieTitle">
           <div class="row">
             <div class="col-10">
               <h3 class="m-0">
                ${movieArray[i].title}
               </h3>
             </div>
             <div class="col-2 rating text-center">
               <span class= ${setClassRating(movieArray[i].vote_average)}>  ${movieArray[i].vote_average} </span>
             </div>
           </div>
         </div>
         <div class="movieOverview">
            <h3> ${movieArray[i].title}</h3>
           <h4>
             <em>Overview</em>
           </h4>
           <p class="m-0">
           ${movieArray[i].overview}
           </p>
         </div>
       </figcaption>
     </figure>
    </div>
    </div>
   
            `


}

movieContainer.innerHTML = result;


function setClassRating(ratingValue){
  if(ratingValue <= 5){
    return 'bg-danger'
  }else if(ratingValue > 5 && ratingValue < 7.5){
    return 'bg-warning'
  }else {
    return 'bg-success'
  }
}