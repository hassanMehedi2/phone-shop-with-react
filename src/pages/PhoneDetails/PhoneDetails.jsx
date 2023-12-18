import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsCart from "./PhoneDetailsCart";

const PhoneDetails = () => {
    const [phone,setPhone]=useState({});

    const {id} =useParams();
    console.log(id);

    const phones = useLoaderData();

    useEffect(()=> {
        const findPhone = phones?.find(phone => phone.id===id);
        setPhone(findPhone);
    },[phones,id])

    return (
        <div >
            {
              <PhoneDetailsCart phone={phone}></PhoneDetailsCart>
            }
        </div>
    );
};

export default PhoneDetails;