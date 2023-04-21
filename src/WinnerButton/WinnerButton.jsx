
function WinnerButton ({winner, setWinner}) {

    return (
          <div className='winner_block'>
              { winner ?
                  <>
                  <img className='winner_img' src={winner.src} alt='Img' />
                  <span className='winner_likes'> {winner.likes} </span>
                  </> : ''}
              { winner === undefined ? <p className='winner_error'> Переможець не визначенний </p> : ''}
              <button className= 'winner_button' onClick={setWinner}>
                  Переможець
              </button>
          </div>
    );

}
export default WinnerButton