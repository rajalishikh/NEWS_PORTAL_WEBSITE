console.log('I LOVE JAVAsCRIPT')

const load_data=async()=>{
    const bring_data=await fetch('https://openapi.programming-hero.com/api/news/categories');
    const convert_json=await bring_data.json()
     let main_data=convert_json.data.news_category
    main_data.forEach((item)=>{
        console.log(item.category_name)

    })
}
// call the function
load_data()