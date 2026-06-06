import { meRequest } from "../services/authService.js"
function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={async () => {
                    try {
                        const userData = await meRequest();
                        console.log(userData);
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                me
            </button>
        </div>
    )
}
export default Home