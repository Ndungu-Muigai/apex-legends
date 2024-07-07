import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const CharacterCard = ({ character }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative">
                <img src={`https://via.placeholder.com/400x300`} alt={character.name} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/character/${character.id}`} className="text-xl font-semibold">View Character</Link>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                <div className="flex justify-between mb-4">
                    <Link to={`/character/${character.previous}`} className={`bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md ${!character.previous && 'opacity-50 cursor-not-allowed'}`}>
                        {character.previous ? `Back to ${character.previous}` : 'No previous'}
                    </Link>
                    <Link to={`/character/${character.next}`} className={`bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md ${!character.next && 'opacity-50 cursor-not-allowed'}`}>
                        {character.next ? `Next to ${character.next}` : 'No next'}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
