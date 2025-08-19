import { useState } from "react";
import axios from "axios";
import Navbar from './Navbar';

function Home() {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState(30);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/shorturls", {
        url,
        shortcode,
        validity
      });
      setResult(res.data);
      console.log(res.data)
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="card shadow p-4">
      <h3 className="mb-3">Create a Short URL</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Original URL</label>
          <input
            type="url"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Custom Shortcode</label>
          <input
            type="text"
            className="form-control"
            value={shortcode}
            onChange={(e) => setShortcode(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Validity (minutes)</label>
          <input
            type="number"
            className="form-control"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Shorten</button>
      </form>

      {result && (
        <div className="alert alert-success mt-4">
          <h5>Short URL Created</h5>
          <p><strong>Short URL:</strong> <a href={result.shortUrl} target="_blank" rel="noreferrer">{result.shortUrl}</a></p>
          <p><strong>Expires At:</strong> {new Date(result.expiresAt).toLocaleString()}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Home;
