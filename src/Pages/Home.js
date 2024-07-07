import CharacterCard from '../Components/CharacterCard'; 

const Home = () => {
    // Example data for characters
    const characters = [
        { id: 1, name: 'Character 1', next: 'Character 2', previous: '' },
        { id: 2, name: 'Character 2', next: 'Character 3', previous: 'Character 1' },
        { id: 3, name: 'Character 3', next: 'Character 4', previous: 'Character 2' },
        // Add more characters as needed
    ];

    return (
        <div className="landing h-screen bg-cover bg-center flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {characters.map((character, index) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
}

export default Home;
