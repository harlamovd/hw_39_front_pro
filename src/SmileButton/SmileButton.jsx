function SmileButton ({el, setImgData}){
    function handleClick (){
        setImgData(el.id);
    }

    return (
          <button className='but'>
              <img className='img' src={el.src} alt='Smile' onClick={handleClick}/>
              <div className='heart' src='images/heart.png'>
                  <p className='span' >{el.likes}</p>
              </div>
          </button>
    );
}
export default SmileButton