const findmystate = () =>
{
    const image=document.querySelector(".image");
    const degree=document.querySelector(".degree");
    const status=document.querySelector(".status");
    const success = (position) => {
        console.log(position)
        const longitude=position.coords.longitude;
        const latitude=position.coords.latitude;
        const ul=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        fetch(ul)
        .then(res => res.json())
        .then(data =>{
            status.textContent=data.city+","+data.principalSubdivision
            console.log(data)
        })

    }
    const error  = () =>
    {
        status.textContent="unable to find ur location";

    }
    navigator.geolocation.getCurrentPosition(success,error);
    degree.style.visibility="visible";

}
