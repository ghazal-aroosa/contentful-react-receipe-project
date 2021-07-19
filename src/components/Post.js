import React from 'react'

const Post=({article})=>{
    console.log(article)
    const{name,featuredImages,description}=article.fields
    return(
        <div className='post'>
            <h2 className='title'>{name}</h2>
            {featuredImages &&<img src={featuredImages.fields.file.url} alt={name}/>}           
            <section>{description}</section>

        </div>
    )
}
export default Post;