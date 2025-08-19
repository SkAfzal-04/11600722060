import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './Navbar';

function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/shorturls")
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      <h3 className="mb-3">URL Shortener Statistics</h3>
      {stats.length === 0 ? (
        <p>No shortened URLs yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Short URL</th>
                <th>Original URL</th>
                <th>Created At</th>
                <th>Expires At</th>
                <th>Total Clicks</th>
                <th>Click Details</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((item, idx) => (
                <tr key={idx}>
                  <td><a href={item.shortUrl} target="_blank" rel="noreferrer">{item.shortUrl}</a></td>
                  <td>{item.originalUrl}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  <td>{new Date(item.expiresAt).toLocaleString()}</td>
                  <td>{item.totalClicks}</td>
                  <td>
                    <ul>
                      {item.clickDetails.map((c, i) => (
                        <li key={i}>
                          {new Date(c.timestamp).toLocaleString()} - {c.source}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
}

export default Stats;
