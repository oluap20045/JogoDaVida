import React from "react";
import './Board.css';
 
class Board extends React.Component {
    renderSquare(isEqual){
        if(isEqual){

        } else { 
            return(
                
                <button className="square">
                    <select className="square" >
                        <option value="" ></option>
                        <option eventKey="1" >Povoar</option>
                        </select>
                    {/* TODO */}
                </button>
            );
        }
        
        
    }

    render(){
        let board = [];
        let cont=false;
        
        for (let j = 0; j <20; j++){
            let rows=[];
            let colums = [];
            for (let i = 0; i <66; i++){
                colums = this.renderSquare(cont);
                rows.push(colums);
            }
            board.push(rows);
        }
        

        return (
            <div className="board-container">
                {board}
            </div>
        );

    }
  
    
}

export default Board;