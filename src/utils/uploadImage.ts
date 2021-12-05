export const checkImage = (image: File)=>{
    
    const typesImage = ['image/png', 'image/jpeg']
    let err = '';
    if (!image) return 'File does not exit'
    if (image.size > 1024 * 1024){
        err = 'File size larger than 1MB'
    }
    // if (!typesImage.includes(image.type)){
    //     err = 'File image must be png or jpeg'
    // }
    return err;
}

export const imageUpload = async(image: File)=>{
    const formData = new FormData();
    formData.append("file",image);
    formData.append("upload_preset","uit_chotot")
    const res = await fetch ('https://api.cloudinary.com/v1_1/uit-hcm-vn/upload', {
        method: "POST",
        body: formData
    })
    const data = await res.json()
    return { public_id: data.public_id, url: data.secure_url };
}