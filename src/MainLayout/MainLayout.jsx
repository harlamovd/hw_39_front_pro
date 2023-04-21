import {useState} from "react";
import imagesData from "../imagesData/imagesData";
import SmileBlock from "../SmileBlock/SmileBlock";
import WinnerButton from "../WinnerButton/WinnerButton";

function MainLayout () {
    const [imgData, setImgData] = useState(imagesData);
    const [winner, setWinner] = useState(null)

    function changeLikes (id) {
        const copy = [...imgData];
        const findElement = copy.find((el=> (el.id === id)));
        findElement.likes += 1;
        setImgData(copy)
    }
    function determineWinner () {
        const copy = [...imgData];
        copy.sort(function(a, b) {
            return a.likes - b.likes;
        });
        const winner = copy[copy.length - 1];
        const uniqueness = copy.filter(el => (el.likes === winner.likes));
        if (uniqueness.length === 1) {
            setWinner(copy[copy.length - 1]);
        } else {
            setWinner(undefined);
        }
    }


    return (
        <>
            < SmileBlock imgData={imgData} setImgData={changeLikes} />
            < WinnerButton winner={winner} setWinner={determineWinner} />
        </>
    );
}
export default MainLayout