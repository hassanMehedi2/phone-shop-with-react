import Phone from "./Phone";


const Phones = ({phones}) => {
    return (
        <div>
            <h2 className="text-2xl text-center py-10"> All Phone</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;