import React from "react";

const Spinner = () => {
return (
<div
style={{
bottom: 0,
left: 0,
right: 0,
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "100px"
}}
>
<div className="spinner-border text-dark'" role="status">
<span className="visually-hidden">Loading...</span>
</div>
</div>
);
};

export default Spinner;