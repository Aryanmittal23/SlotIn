import React, { useState, useEffect } from 'react';
import './Customers.css'; // Import custom CSS for styling

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            try {
                // Replace with actual API call to fetch customers data
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="customers-container">
            <h2>Customers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Customers;
