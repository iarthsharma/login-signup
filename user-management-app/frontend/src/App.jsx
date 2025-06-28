import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users', formData);
      setMessage('✅ User submitted successfully!');
      setFormData({ name: '', email: '', age: '' });
    } catch (error) {
      setMessage('❌ Submission failed. Please check your input.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">User Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full p-2 border rounded"
          min="1"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  );
}

export default App;
