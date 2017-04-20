

class GameLogic{
	static generate(){
		return new GameLogic();

	}
	
	RandomInt (){
		return Math.floor(Math.random() * 9)+1
  	};
  	checkNumbers(answer, guess){
  		if(guess > answer){
  			return {value:guess, correct: false, text:"is BIGGER than correct answer"}
  		}else if( guess < answer){
  			return {value:guess, correct: false, text:"is SMALLER than correct answer"}
	    }else{
    		return {value:guess, correct: true, text:"is CORRECT answer"}
    	}	
	};

  	ColoredList (prevGuess){
  		var output = prevGuess.correct ?
    		<span style ={{color: "green"}}>
      			{prevGuess.value} {prevGuess.text}
    		</span> 
    		:
    		<span style ={{color: "red"}}>
      			{prevGuess.value} {prevGuess.text}
    		</span>
  		return <p key= {prevGuess.value}>{output}</p>
    };


}
export default GameLogic;