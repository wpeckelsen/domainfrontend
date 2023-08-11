import React, {useState} from 'react';
import PageCard from "../../components/PageCard/PageCard";
import "./SearchPage.scss"
import Button from "../../components/Button/Button";
import axios from "axios";
import Spreadsheet from "react-spreadsheet";
function SearchPage() {
    const [url, setUrl] = useState('');
    const [domain, setDomain] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/search/${url}`);
            setDomain(response.data);
        } catch (error) {
            console.error('Error fetching domain:', error);
        }
    };

    return (
        <>

            <div
            className="bar-holder"
            >
                <input
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <Button
                    type="button"
                    click={handleSearch}
                    content="Search"
                    />
            </div>
            <PageCard
            title = "Domains"
            subtitle = "subtitle"
            content = {
                <>



                </>
            }
            />


            {domain && (
                <div>
                    <h2>Domain Details</h2>
                    <p>URL: {domain.url}</p>
                    {/* Display other domain properties */}
                </div>
            )}
        </>
    );


}

export default SearchPage;