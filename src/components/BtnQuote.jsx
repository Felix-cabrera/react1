import getRandomElemArray from "../utils/getRandomElemArray"

const BtnQuote = ({setQuote, phrases, setNumberBg}) => {
    const handleRandomPhrase = () => {
        setQuote(getRandomElemArray(phrases))
        setNumberBg(getRandomElemArray([1,2,3,4]))
    }
  return (
    
    <button className='container_btn' onClick={handleRandomPhrase}> <img src="/dados.png" alt="dados" className="dados" /> Other phrase</button>
  )
}

export default BtnQuote