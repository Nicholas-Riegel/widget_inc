import React, { useEffect, useState } from 'react'; // Import React and necessary hooks from React
import { Link } from 'react-router-dom'; // Import Link component for navigation
import axios from 'axios'; // Import axios for making HTTP requests
import './Home.css'; // Import CSS file for styling

// Define the Home component
const Home = () => {
    // Define a state variable 'widgets' with a setter 'setWidgets' and initialize it as an empty array
    const [widgets, setWidgets] = useState([]);

    // useEffect hook to perform side effects in the component
    useEffect(() => {
        // Make a GET request to the API to fetch widget data
        axios.get('http://3.14.175.247:8000/api/widgets/')
            .then(response => {
                // On success, update the 'widgets' state with the fetched data
                setWidgets(response.data);
            })
            .catch(error => {
                // Log any errors to the console
                console.error('There was an error fetching the widgets!', error);
            });
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts

    // Render the component
    return (
        <div id='home-wrapper'>
            {/* Main heading for the page */}
            <h1>Welcome to Widgets, Inc.</h1>
            <div id="home-container">
                {/* List of widgets */}
                <ul>
                    {widgets.map(widget => (
                        // Generate a list item for each widget
                        <li key={widget.id}>
                            {/* Link to the detail page of each widget */}
                            <Link to={`/widgets/${widget.id}`}>{widget.name} - ${widget.price}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Export the Home component as the default export
export default Home;
