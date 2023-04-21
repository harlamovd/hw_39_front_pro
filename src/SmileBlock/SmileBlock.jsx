import SmileButton from "../SmileButton/SmileButton";

function SmileBlock ({imgData, setImgData}) {
    return (
        <>
            {imgData.map(el => (
                < SmileButton key={el.id} setImgData={setImgData} el={el}/>
            ))}
        </>
    );

}

export default SmileBlock