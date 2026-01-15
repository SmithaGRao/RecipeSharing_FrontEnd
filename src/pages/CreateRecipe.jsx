import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateRecipe.css';

export default function CreateRecipe() {
    const [recipe, setRecipe] = useState({
        title: '',
        desc: '',
        image: '',
        ingredients: '',
        instructions: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://recipesharing-backend-x3m4.onrender.com/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe),
            });

            if (response.ok) {
                alert('Recipe created successfully!');
                navigate('/');
            } else {
                alert('Failed to create recipe');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating recipe');
        }
    };

    return (
        <div className="create-recipe-container">
            <h2>Create New Recipe</h2>
            <form onSubmit={handleSubmit} className="create-recipe-form">
                <div className="form-group">
                    <label>Recipe Title</label>
                    <input
                        type="text"
                        name="title"
                        value={recipe.title}
                        onChange={handleChange}
                        required
                        placeholder="e.g. PaniPuri"
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="desc"
                        value={recipe.desc}
                        onChange={handleChange}
                        required
                        placeholder="Short description..."
                    />
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={recipe.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* You can add Ingredients and Instructions fields here if extended in backend model */}

                <button type="submit" className="submit-btn">Share Recipe</button>
            </form>
        </div>
    );
}
