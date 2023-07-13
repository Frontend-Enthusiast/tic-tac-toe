import React, { useState } from 'react'
import '../App.css'
const Boxes = () => {
    const [board, setBoard] = useState(Array(9).fill(' '));
    const [turn, setTurn] = useState('X');
    const handleClick = (i) => {
        let square = [...board];
        if (turn === 'X') {
            square[i] = turn;
            setTurn('0');
            setBoard(square);
        }
        else {
            square[i] = turn;
            setTurn('X');
            setBoard(square);
        }
        checkWin(square)
        if(board[i]!==' '){
            alert("Already clicked");
            return;
        }
        else {
            if (checkDraw(square)) {
                alert('Draw');
                setBoard(Array(9).fill(' '));
                setTurn('X');
                return;
            }
        }
    }
    let flag = 0;
    const checkWin = (board) => {
        const winningCondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        winningCondition.forEach((item) => {
            if ((board[item[0]] === 'X' && board[item[1]] === 'X' && board[item[2]] === 'X')) {
                alert("X has won");
                flag = 1;
                setBoard(Array(9).fill(' '));
                setTurn('X');
                return flag;
            }
            else if ((board[item[0]] === '0' && board[item[1]] === '0' && board[item[2]] === '0')) {
                alert("0 has won");
                flag = 1;
                setBoard(Array(9).fill(' '));
                setTurn('X');
                return flag;
            }
        });
    }
    const checkDraw = () => {
        let count = 0;
        board.forEach((ele) => {
            if (ele !== ' ' && flag===0) {
                count++;
            }
        });
        return count === 8;
    }
    return (
        <div className='game__body'>
            <p>Turn for: {turn}</p>
            <table>
                <tbody>
                    <tr>
                        <td onClick={() => { handleClick(0) }}>{board[0]}</td>
                        <td onClick={() => { handleClick(1) }}>{board[1]}</td>
                        <td onClick={() => { handleClick(2) }}>{board[2]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => { handleClick(3) }}>{board[3]}</td>
                        <td onClick={() => { handleClick(4) }}>{board[4]}</td>
                        <td onClick={() => { handleClick(5) }}>{board[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => { handleClick(6) }}>{board[6]}</td>
                        <td onClick={() => { handleClick(7) }}>{board[7]}</td>
                        <td onClick={() => { handleClick(8) }}>{board[8]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Boxes