
import { useState } from 'react';
import axios from 'axios';

const CreateChallenge = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [days, setDays] = useState('');

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/challenges', {
                name: title,
                description,
                days: parseInt(days), // Ensure days is an integer
            });
            alert(`Challenge created: ${response.data.message}`);
            // Optionally reset the form
            setTitle('');
            setDescription('');
            setDays('');
        } catch (error) {
            console.error('Error creating challenge:', error);
            alert('Failed to create challenge');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Challenge</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="days">Number of Days:</label>
                <input
                    type="number"
                    id="days"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Challenge</button>
        </form>
    );
};

export default CreateChallenge;