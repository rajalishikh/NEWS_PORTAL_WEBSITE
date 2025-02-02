console.log('I LOVE JAVAsCRIPT')

const load_data=async()=>{
    const bring_data=await fetch('https://openapi.programming-hero.com/api/news/categories');
    const convert_json=await bring_data.json()
    let main_data=convert_json.data.news_category
    main_data.forEach((item)=>{
        show_data_news(item)

    })
}

// show data 
function show_data_news(data){
    // console.log(data)
    const container=document.getElementById('news_container');
    const creteElement=document.createElement('div')
    
    creteElement.innerHTML=`<p onclick="details(${data.category_id})" class="hover:text-[#5D5FEF] hover:bg-[#EEEFFF] p-2">${data.category_name}</p>`
  
    container.appendChild(creteElement)
   

}
// function show details
async function details(id){
  console.log(id)
     let number=id.toString()
     const bring_dataBy_id=await fetch(`https://openapi.programming-hero.com/api/news/category/0${number}`)
     const convert_json2= await bring_dataBy_id.json()
     const bring_details_container=document.getElementById('cart_container')
     bring_details_container.innerHTML=''
     convert_json2.data.forEach((detail)=>{
      console.log(detail)
      const create_div_for_details = document.createElement('div');
        
        create_div_for_details.innerHTML = `
        <div class="card card-side bg-white shadow-xl mb-4">
              <figure>
                <img
                  src="${detail.thumbnail_url}"
                  alt="Movie"
                  class='w-52'
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions flex justify-between items-center gap-4">
                  <div class="flex gap-1 items-center">
                    <div>
                      <img
                        src="${detail?.author.img}"
                        alt=""
                        srcset=""
                        class="w-12 h-11"
                        id="image_shape"
                      />
                    </div>
                    <div>
                      <p>
                        <span class="text-sm" style="display: block">name</span>
                        <span class="text-sm" style="display: block">date of birth</span>
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div>
                      <img class="w-8" src="image/Capture.PNG" alt="" srcset="" />
                    </div>
                    <div>
                      <p class="text-sm">1.5<span>M</span></p>
                    </div>
                  </div>
                  <div>
                    <div class="rating rating-sm">
                      <input type="radio" name="rating-9" class="rating-hidden" />
                      <input type="radio" name="rating-9" class="mask mask-star-2" />
                      <input type="radio" name="rating-9" class="mask mask-star-2" />
                      <input type="radio" name="rating-9" class="mask mask-star-2" />
                      <input type="radio" name="rating-9" class="mask mask-star-2" />
                      <input type="radio" name="rating-9" class="mask mask-star-2" />
                    </div>
                  </div>
                  <div>
                    <p class="w-16">➡️</p>
                  </div>
                </div>
              </div>
            </div>
        `;
        bring_details_container.appendChild(create_div_for_details);
     })

}
// show details
 
 // call the function
load_data()