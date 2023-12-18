
const FavoriteCart = ({phone}) => {
    return (
        <div>
             <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                <div
                    classNameName="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src={phone.image}
                        alt="card-image" className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                    <h6
                        className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        startups
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {phone.phone_name}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default FavoriteCart;