import React, { useEffect, useState } from "react";
import FaceItem from "./FaceItem";
import "./FactList.css";
import { getCatFacts } from "../utils/api";



function FactList() {
    const [ facts, setFacts ] =useState([]);

    useEffect(() => {
        getCatFacts().then(setFacts);
}, []); 

    return (
        <div className="fact-list">
            {facts.map(fact => <FaceItem key={fact_id} fact={fact}/>)}
        </div>
    );
}

export default FactList;