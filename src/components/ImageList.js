import ImageShow from "./ImageShow";
import './ImgList.css'
function ImageList({images}){
    const rederedImages = images.map((image)=>{
        return <ImageShow key={image.id} image={image}/>
    })
    return (
        <div className="image-list">{rederedImages}</div>
    )
};

export default ImageList;