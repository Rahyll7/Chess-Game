import Piece from '../pieces/piece';
import './style.css';
const  Promotion =({ couldBePromoted, promotionType, pieceColor }) =>{
  let promotionTypes = ['queen', 'knight', 'rook', 'bishop'];

  const handleClick =(piece)=> {
    promotionType(piece);
    couldBePromoted(false);
  }

  return (
    <div className="promotion">
      {/* <div className='pieces'> */}
        {promotionTypes?.map((piece) => (
          <>
            <span onClick={() => handleClick(piece)}>
              <Piece color={pieceColor} type={piece} />
            </span>
          </>
        ))}
      {/* </div> */}
    </div>
  );
}

export default Promotion;
