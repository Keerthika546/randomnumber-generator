
function RandomNumber({ mini, maxi, generate, handlemaxChange, handleminChange,number }) {
    return (
        <div>
            <div className="flex justify-between mx-10 mt-5">
                <div className="">
                    <h1 className="text-purple-900 text-xl">Lucky Lab</h1>
                    <h2 className="text-purple-600">YOUR RANDOM NUMBER STUDIO</h2>
                </div>
                <p className="bg-purple-200 text-purple-600 h-8 px-2 py-1 rounded-2xl">Let's Play!</p>
            </div>
            <div className="flex flex-col items-center mt-5 bg-white mx-10 p-5 rounded-2xl">
                <h2>Feeling Lucky?</h2>
                <p>Discover your lucky number.</p>
                <div className="bg-purple-100 w-3/4 flex flex-col items-center mt-5 p-2 rounded-xl">
                    {number === null ? (
                        <>
                            <i className="fa-solid fa-question text-2xl text-purple-500"></i>
                            <h2 className="font-semibold text-2xl text-purple-800">No Number Yet</h2>
                            <p className="text-gray-400">Your lucky number will appear here.</p>
                        </>
                    ) : (
                        <>
                            <i className="fa-solid fa-wand-magic-sparkles text-2xl text-purple-500"></i>
                            <h2 className="font-bold text-6xl text-purple-800 py-4">{number}</h2>
                        </>
                    )}
                </div>
                <h2 className="text-xl ml-5 my-5 ">Choose your number range</h2>
                <div className="flex gap-4 w-3/4 justify-between">
                    <div className="bg-purple-100 w-1/4 p-2 rounded-xl text-center">
                        <p className="text-purple-400">MINIMUM</p>
                        <input className="text-purple-800 font-semibold text-2xl w-full outline-none text-center" type="number" onChange={handleminChange} value={mini}></input>
                    </div>
                    <div className="bg-purple-100 w-1/4 p-2 rounded-xl text-center">
                        <p className="text-purple-400">MAXIMUM</p>
                        <input className="text-purple-800 font-semibold text-2xl w-full outline-none text-center" type="number" onChange={handlemaxChange} value={maxi}></input>
                    </div>
                </div>
                <button className="flex gap-2 bg-purple-500 w-3/4 mt-5 mb-3 rounded-xl items-center justify-center h-10 p-8 text-2xl" onClick={generate}>
                    <i className="fa-solid fa-shuffle text-white"></i>
                    <h2>Generate Lucky Number</h2>
                </button>
                <p>Every click brings a new possibility <i className="fa-solid fa-wand-sparkles"></i></p>
            </div>


        </div>
    )
}
export default RandomNumber