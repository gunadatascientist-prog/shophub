import React from 'react';
import './Style.css';

const Banner = () => {
    return (
        <section className="bannerSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="bannerItem">
                            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400" alt="Banner 1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bannerItem">
                            <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400" alt="Banner 2" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bannerItem">
                            <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400" alt="Banner 3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
