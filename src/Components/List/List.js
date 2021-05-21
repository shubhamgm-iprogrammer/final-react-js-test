import React,{useEffect} from 'react'
import {useSelector } from "react-redux";
import {useHistory} from "react-router-dom";

const List = () => {


    const List = useSelector(state => state.styles)

    const history = useHistory();
    console.log("i am List>>>",List)

    const handelRedirect = (uniqueid) => {
     history.push({
         pathname:"/editStyle/uniqueId",
         search:uniqueid
        })
    }
    return (
        <div>
            <table>
                <tr>
                <th className="p-5">Unique ID</th>
                <th className="p-5">Source</th>
                <th className="p-5">Element Type</th>
                <th className="p-5">Element Name</th>
                <th className="p-5">Style</th>
                <th className="p-5">Material</th>
                </tr>
            {List.map(item => {
                return ( 
                        <tr onClick={() => handelRedirect(item.unique_id)} className="mx-2">
                            <td className="px-5 py-2">{item.unique_id}</td>
                            <td className="px-5 py-2">{item.source}</td>
                            <td className="px-5 py-2">{item.element_type}</td>
                            <td className="px-5 py-2">{item.element_name}</td>
                            <td className="px-5 py-2">{item.style}</td>
                            <td className="px-5 py-2">{item.material}</td>
                        </tr>
                )
            })}
            </table>   
        </div>
    )
}

export default List
