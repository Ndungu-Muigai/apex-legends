import "../Assets/CSS/Character.css";
import Conduit from "../Assets/Images/Conduit.jpeg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Character = () => {
    return (
        <>
            <div className="relative w-full mx-auto mb-5">
                <video className="w-full h-96" controls>
                    <source src="your-video-source.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-2">
                    <button className="button">
                        <FaAngleLeft />
                        <span>Back</span>
                    </button>
                    <button className="button">
                        <span>Next</span>
                        <FaAngleRight />
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-center md:flex-row md:justify-around p-3 md:space-x-5">
                <div className="flex-1 flex justify-center items-center">
                    <img src={Conduit} alt="Character 1" className="h-auto w-full object-cover max-w-xs md:max-w-full md:max-h-96" />
                </div>
                <div className="flex-1 mt-5 md:mt-0">
                    <p>"Catchphrase"</p>
                    <div className="mt-2 space-y-1">
                        <h1 className="uppercase font-bold text-2xl">Character title</h1>
                        <h3>Tactical Ability</h3>
                        <p>Description here</p>
                    </div>

                    <div className="mt-6 space-y-2">
                        <p className="info">Real Name: <span>Real name here</span></p>
                        <p className="info">Age: <span>Age here</span></p>
                        <p className="info">Home World: <span>Home world here</span></p>
                        <p className="info">Class: <span>Class here</span></p>
                        <p className="info">Tactical Ability: <span>Tactical ability here</span></p>
                        <p className="info">Passive Ability: <span>Passive ability here</span></p>
                        <p className="info">Ultimate Ability: <span>Ultimate ability here</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Character;
