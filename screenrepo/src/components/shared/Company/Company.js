import React, { useState, useEffect } from "react";
import { getPagination } from "../../services/ScrollService";

const Company = () => {
const [data, setData] = useState([]);
const [start, setStart] = useState(0);
const [end, setEnd] = useState(10);
const [isLoading, setIsLoading] = useState(true); // Step 1

useEffect(() => {
const fetchData = async () => {
setIsLoading(true); // Step 2
const response = await getPagination(start, end);
setData(prevData => [...prevData, ...response.data]);
setIsLoading(false); // Step 3
};
fetchData();
}, [start, end]);

const handleScroll = () => {
const isScrolledToLastImages =
window.innerHeight + document.documentElement.scrollTop >=
document.documentElement.offsetHeight - 10 * 100;
if (isScrolledToLastImages) {
setStart(prevStart => prevStart + 10);
setEnd(prevEnd => prevEnd + 10);
}
};

useEffect(() => {
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
<>
<div className={`image-container ${isLoading ? "loading" : ""}`}> {/* Step 5 */}
<div className="row">
{data.map((item, n) => (
<div className="col-md-3" key={n}>
<a href="#">
<img src={item.screen_shot} className="img-fluid" />
</a>
</div>
))}
</div>
</div>
{isLoading && <div className="preloader">Loading...</div>} {/* Step 4 */}
</>
);
};

export default Company;