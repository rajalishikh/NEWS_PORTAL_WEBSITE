console.log('I LOVE JAVAsCRIPT')

const load_data=async()=>{
    const bring_data=await fetch('https://openapi.programming-hero.com/api/news/categories');
    const convert_json=await bring_data.json()
     let main_data=convert_json.data.news_category
    main_data.forEach((item)=>{
        show_data_news(item)

    })
}
// call the function
load_data()
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
     let number=id.toString()
     const bring_dataBy_id=await fetch(`https://openapi.programming-hero.com/api/news/category/0${number}`)
     const convert_json2= await bring_dataBy_id.json()
     convert_json2.data.forEach((detail)=>{
        console.log(detail)
     })

}